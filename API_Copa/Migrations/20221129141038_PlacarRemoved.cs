using Microsoft.EntityFrameworkCore.Migrations;

namespace API_Copa.Migrations
{
    public partial class PlacarRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Placar",
                table: "Selecoes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Placar",
                table: "Selecoes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
