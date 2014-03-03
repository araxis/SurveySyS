namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change5 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Choices", "MultiChoiceQuestion_Id", "dbo.Questions");
            DropIndex("dbo.Choices", new[] { "MultiChoiceQuestion_Id" });
            RenameColumn(table: "dbo.Choices", name: "MultiChoiceQuestion_Id", newName: "QuestionId");
            AlterColumn("dbo.Choices", "QuestionId", c => c.Int(nullable: false));
            CreateIndex("dbo.Choices", "QuestionId");
            AddForeignKey("dbo.Choices", "QuestionId", "dbo.Questions", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Choices", "QuestionId", "dbo.Questions");
            DropIndex("dbo.Choices", new[] { "QuestionId" });
            AlterColumn("dbo.Choices", "QuestionId", c => c.Int());
            RenameColumn(table: "dbo.Choices", name: "QuestionId", newName: "MultiChoiceQuestion_Id");
            CreateIndex("dbo.Choices", "MultiChoiceQuestion_Id");
            AddForeignKey("dbo.Choices", "MultiChoiceQuestion_Id", "dbo.Questions", "Id");
        }
    }
}
