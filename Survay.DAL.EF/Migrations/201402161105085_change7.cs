namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change7 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.PageQuestions", "Question_Id", "dbo.Questions");
            DropIndex("dbo.PageQuestions", new[] { "Question_Id" });
            RenameColumn(table: "dbo.PageQuestions", name: "Question_Id", newName: "QuestionId");
            AlterColumn("dbo.PageQuestions", "QuestionId", c => c.Int(nullable: false));
            CreateIndex("dbo.PageQuestions", "QuestionId");
            AddForeignKey("dbo.PageQuestions", "QuestionId", "dbo.Questions", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PageQuestions", "QuestionId", "dbo.Questions");
            DropIndex("dbo.PageQuestions", new[] { "QuestionId" });
            AlterColumn("dbo.PageQuestions", "QuestionId", c => c.Int());
            RenameColumn(table: "dbo.PageQuestions", name: "QuestionId", newName: "Question_Id");
            CreateIndex("dbo.PageQuestions", "Question_Id");
            AddForeignKey("dbo.PageQuestions", "Question_Id", "dbo.Questions", "Id");
        }
    }
}
