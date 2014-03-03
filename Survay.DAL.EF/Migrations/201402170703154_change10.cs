namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change10 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Questions", "Description", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Questions", "Description");
        }
    }
}
