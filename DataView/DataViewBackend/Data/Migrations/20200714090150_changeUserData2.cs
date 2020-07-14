using Microsoft.EntityFrameworkCore.Migrations;

namespace DataViewBackend.Migrations
{
    public partial class changeUserData2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "UserData");

            migrationBuilder.RenameColumn(
                name: "Tool",
                table: "UserData",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "UserData",
                newName: "FirstName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "UserData",
                newName: "Tool");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "UserData",
                newName: "Phone");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "UserData",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
