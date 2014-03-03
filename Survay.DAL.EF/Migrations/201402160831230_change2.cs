namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Choices", "MultiChoiceAnswer_Id", "dbo.Answers");
            DropIndex("dbo.Choices", new[] { "MultiChoiceAnswer_Id" });
            DropColumn("dbo.Answers", "Discriminator");
            DropColumn("dbo.Choices", "MultiChoiceAnswer_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Choices", "MultiChoiceAnswer_Id", c => c.Int());
            AddColumn("dbo.Answers", "Discriminator", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Choices", "MultiChoiceAnswer_Id");
            AddForeignKey("dbo.Choices", "MultiChoiceAnswer_Id", "dbo.Answers", "Id");
        }
    }
}
