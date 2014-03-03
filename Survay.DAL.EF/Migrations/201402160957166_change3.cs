namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pages", "SurvayModelId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pages", "SurvayModelId");
        }
    }
}
