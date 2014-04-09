namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class validation : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Questions", "Title", c => c.String(nullable: false));
            AlterColumn("dbo.Choices", "Title", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Choices", "Title", c => c.String());
            AlterColumn("dbo.Questions", "Title", c => c.String());
        }
    }
}
