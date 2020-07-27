using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DataViewBackend.Migrations
{
    public partial class migration5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventTask");

            migrationBuilder.DropTable(
                name: "ToolDowntime");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "UserData",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<byte[]>(
                name: "ImageData",
                table: "UserData",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageTitle",
                table: "UserData",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserDescription",
                table: "UserData",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssignerId = table.Column<int>(type: "int", nullable: false),
                    AssignerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Start = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    End = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Task",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssignerId = table.Column<int>(type: "int", nullable: false),
                    AssignerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssigneeId = table.Column<int>(type: "int", nullable: false),
                    AssigneeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Start = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    End = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Task", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EventUsers",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false),
                    EventId = table.Column<int>(type: "int", nullable: false),
                    UserDataId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventUsers", x => new { x.UserId, x.EventId });
                    table.ForeignKey(
                        name: "FK_EventUsers_Event_EventId",
                        column: x => x.EventId,
                        principalTable: "Event",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventUsers_UserData_UserDataId",
                        column: x => x.UserDataId,
                        principalTable: "UserData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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
                name: "IX_EventUsers_EventId",
                table: "EventUsers",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_EventUsers_UserDataId",
                table: "EventUsers",
                column: "UserDataId");

            migrationBuilder.CreateIndex(
                name: "IX_UserTasks_TaskId",
                table: "UserTasks",
                column: "TaskId");

            migrationBuilder.CreateIndex(
                name: "IX_UserTasks_UserDataId",
                table: "UserTasks",
                column: "UserDataId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventUsers");

            migrationBuilder.DropTable(
                name: "UserTasks");

            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.DropTable(
                name: "Task");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "UserData");

            migrationBuilder.DropColumn(
                name: "ImageData",
                table: "UserData");

            migrationBuilder.DropColumn(
                name: "ImageTitle",
                table: "UserData");

            migrationBuilder.DropColumn(
                name: "UserDescription",
                table: "UserData");

            migrationBuilder.CreateTable(
                name: "EventTask",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssigneeId = table.Column<int>(type: "int", nullable: false),
                    AssigneeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssignerId = table.Column<int>(type: "int", nullable: false),
                    AssignerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    End = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Start = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTask", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ToolDowntime",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssignerId = table.Column<int>(type: "int", nullable: false),
                    AssignerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    End = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Start = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tool = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ToolDowntime", x => x.Id);
                });
        }
    }
}
