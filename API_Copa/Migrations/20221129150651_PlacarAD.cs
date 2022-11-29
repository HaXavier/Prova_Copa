using Microsoft.EntityFrameworkCore.Migrations;

namespace API_Copa.Migrations
{
    public partial class PlacarAD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Placar",
                table: "Selecoes");

            migrationBuilder.AddColumn<int>(
                name: "PlacarA",
                table: "Jogos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlacarB",
                table: "Jogos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlacarA",
                table: "Jogos");

            migrationBuilder.DropColumn(
                name: "PlacarB",
                table: "Jogos");

            migrationBuilder.AddColumn<int>(
                name: "Placar",
                table: "Selecoes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
