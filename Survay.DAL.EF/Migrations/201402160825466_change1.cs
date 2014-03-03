namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Choices",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Tag = c.String(),
                        MultiChoiceQuestion_Id = c.Int(),
                        MultiChoiceAnswer_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Questions", t => t.MultiChoiceQuestion_Id)
                .ForeignKey("dbo.Answers", t => t.MultiChoiceAnswer_Id)
                .Index(t => t.MultiChoiceQuestion_Id)
                .Index(t => t.MultiChoiceAnswer_Id);
            
            AddColumn("dbo.Answers", "Discriminator", c => c.String(nullable: false, maxLength: 128));
            AddColumn("dbo.Answers", "PageQuestion_Id", c => c.Int());
            AddColumn("dbo.Questions", "Discriminator", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Answers", "PageQuestion_Id");
            AddForeignKey("dbo.Answers", "PageQuestion_Id", "dbo.PageQuestions", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Choices", "MultiChoiceAnswer_Id", "dbo.Answers");
            DropForeignKey("dbo.Answers", "PageQuestion_Id", "dbo.PageQuestions");
            DropForeignKey("dbo.Choices", "MultiChoiceQuestion_Id", "dbo.Questions");
            DropIndex("dbo.Choices", new[] { "MultiChoiceAnswer_Id" });
            DropIndex("dbo.Answers", new[] { "PageQuestion_Id" });
            DropIndex("dbo.Choices", new[] { "MultiChoiceQuestion_Id" });
            DropColumn("dbo.Questions", "Discriminator");
            DropColumn("dbo.Answers", "PageQuestion_Id");
            DropColumn("dbo.Answers", "Discriminator");
            DropTable("dbo.Choices");
        }
    }
}
