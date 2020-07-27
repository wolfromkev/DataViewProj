using Microsoft.EntityFrameworkCore.Migrations;

namespace DataViewBackend.Migrations
{
    public partial class migration6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageTitle",
                table: "UserData",
                newName: "Role");

            migrationBuilder.RenameColumn(
                name: "ImageData",
                table: "UserData",
                newName: "Image");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Event",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Event");

            migrationBuilder.RenameColumn(
                name: "Role",
                table: "UserData",
                newName: "ImageTitle");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "UserData",
                newName: "ImageData");
        }
    }
}
