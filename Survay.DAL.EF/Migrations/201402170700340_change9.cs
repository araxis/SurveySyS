namespace Survey.DAL.EF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change9 : DbMigration
    {
        public override void Up()
        {
        
            AddColumn("dbo.Choices", "Title", c => c.String());
            DropColumn("dbo.Questions", "Description");
            DropColumn("dbo.Choices", "Tag");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Choices", "Tag", c => c.String());
            AddColumn("dbo.Questions", "Description", c => c.String());
            DropColumn("dbo.Choices", "Title");
          
        }
    }
}
