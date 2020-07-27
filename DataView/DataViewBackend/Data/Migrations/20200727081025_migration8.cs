using Microsoft.EntityFrameworkCore.Migrations;

namespace DataViewBackend.Migrations
{
    public partial class migration8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserTasks");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserTasks",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false),
                    TaskId = table.Column<int>(type: "int", nullable: false),
                    UserDataId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTasks", x => new { x.UserId, x.TaskId });
                    table.ForeignKey(
                        name: "FK_UserTasks_Task_TaskId",
                        column: x => x.TaskId,
                        principalTable: "Task",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserTasks_UserData_UserDataId",
                        column: x => x.UserDataId,
                        principalTable: "UserData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserTasks_TaskId",
                table: "UserTasks",
                column: "TaskId");

            migrationBuilder.CreateIndex(
                name: "IX_UserTasks_UserDataId",
                table: "UserTasks",
                column: "UserDataId");
        }
    }
}
