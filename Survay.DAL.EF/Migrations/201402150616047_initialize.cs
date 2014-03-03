namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialize : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Answers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SurveyModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Pages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        HeaderTitle = c.String(),
                        Description = c.String(),
                        Order = c.Int(nullable: false),
                        Survey_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.SurveyModels", t => t.Survey_Id)
                .Index(t => t.Survey_Id);
            
            CreateTable(
                "dbo.PageQuestions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        QuestionOrder = c.Int(nullable: false),
                        Page_Id = c.Int(),
                        Question_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Pages", t => t.Page_Id)
                .ForeignKey("dbo.Questions", t => t.Question_Id)
                .Index(t => t.Page_Id)
                .Index(t => t.Question_Id);
            
            CreateTable(
                "dbo.Questions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        ImagePath = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.DescriptiveAnswers",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Value = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Answers", t => t.Id)
                .Index(t => t.Id);
            
            CreateTable(
                "dbo.NumericAnswers",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        Value = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Answers", t => t.Id)
                .Index(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.NumericAnswers", "Id", "dbo.Answers");
            DropForeignKey("dbo.DescriptiveAnswers", "Id", "dbo.Answers");
            DropForeignKey("dbo.Pages", "Survey_Id", "dbo.SurveyModels");
            DropForeignKey("dbo.PageQuestions", "Question_Id", "dbo.Questions");
            DropForeignKey("dbo.PageQuestions", "Page_Id", "dbo.Pages");
            DropIndex("dbo.NumericAnswers", new[] { "Id" });
            DropIndex("dbo.DescriptiveAnswers", new[] { "Id" });
            DropIndex("dbo.Pages", new[] { "Survey_Id" });
            DropIndex("dbo.PageQuestions", new[] { "Question_Id" });
            DropIndex("dbo.PageQuestions", new[] { "Page_Id" });
            DropTable("dbo.NumericAnswers");
            DropTable("dbo.DescriptiveAnswers");
            DropTable("dbo.Questions");
            DropTable("dbo.PageQuestions");
            DropTable("dbo.Pages");
            DropTable("dbo.SurveyModels");
            DropTable("dbo.Answers");
        }
    }
}
