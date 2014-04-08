using System.Data.Entity;
using Survey.Domain;
namespace Survey.DAL.EF
{
    public class SurvayDbContext:DbContext
    {
  

        public DbSet<SurveyModel> Surveys { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Answer> Answers { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SurveyModel>().HasMany(m => m.Pages).WithRequired(r => r.Survey).HasForeignKey(f => f.SurvayModelId);
            modelBuilder.Entity<Page>().HasMany(m => m.Questions).WithRequired(r => r.Page).HasForeignKey(f => f.PageId);
            modelBuilder.Entity<PageQuestion>().HasRequired(r => r.Question).WithMany().HasForeignKey(f => f.QuestionId);
            modelBuilder.Entity<Question>().HasMany(m => m.Choices).WithRequired(r => r.Question).HasForeignKey(f => f.QuestionId);
            modelBuilder.Entity<DescriptiveAnswer>().ToTable("DescriptiveAnswers");
            modelBuilder.Entity<NumericAnswer>().ToTable("NumericAnswers");

            base.OnModelCreating(modelBuilder);
        }
    }
}
