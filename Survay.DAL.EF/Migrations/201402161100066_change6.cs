namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change6 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.PageQuestions", "Page_Id", "dbo.Pages");
            DropIndex("dbo.PageQuestions", new[] { "Page_Id" });
            RenameColumn(table: "dbo.PageQuestions", name: "Page_Id", newName: "PageId");
            AlterColumn("dbo.PageQuestions", "PageId", c => c.Int(nullable: false));
            CreateIndex("dbo.PageQuestions", "PageId");
            AddForeignKey("dbo.PageQuestions", "PageId", "dbo.Pages", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PageQuestions", "PageId", "dbo.Pages");
            DropIndex("dbo.PageQuestions", new[] { "PageId" });
            AlterColumn("dbo.PageQuestions", "PageId", c => c.Int());
            RenameColumn(table: "dbo.PageQuestions", name: "PageId", newName: "Page_Id");
            CreateIndex("dbo.PageQuestions", "Page_Id");
            AddForeignKey("dbo.PageQuestions", "Page_Id", "dbo.Pages", "Id");
        }
    }
}
