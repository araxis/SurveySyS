namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change4 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Pages", "Survey_Id", "dbo.SurveyModels");
            DropIndex("dbo.Pages", new[] { "Survey_Id" });
            DropColumn("dbo.Pages", "SurvayModelId");
            RenameColumn(table: "dbo.Pages", name: "Survey_Id", newName: "SurvayModelId");
            AlterColumn("dbo.Pages", "SurvayModelId", c => c.Int(nullable: false));
            CreateIndex("dbo.Pages", "SurvayModelId");
            AddForeignKey("dbo.Pages", "SurvayModelId", "dbo.SurveyModels", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Pages", "SurvayModelId", "dbo.SurveyModels");
            DropIndex("dbo.Pages", new[] { "SurvayModelId" });
            AlterColumn("dbo.Pages", "SurvayModelId", c => c.Int());
            RenameColumn(table: "dbo.Pages", name: "SurvayModelId", newName: "Survey_Id");
            AddColumn("dbo.Pages", "SurvayModelId", c => c.Int(nullable: false));
            CreateIndex("dbo.Pages", "Survey_Id");
            AddForeignKey("dbo.Pages", "Survey_Id", "dbo.SurveyModels", "Id");
        }
    }
}
