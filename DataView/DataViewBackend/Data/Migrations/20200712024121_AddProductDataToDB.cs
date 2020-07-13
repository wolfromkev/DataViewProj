using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DataViewBackend.Migrations
{
    public partial class AddProductDataToDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FinishTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartBubbles = table.Column<int>(type: "int", nullable: false),
                    StartScratches = table.Column<int>(type: "int", nullable: false),
                    StartParticles = table.Column<int>(type: "int", nullable: false),
                    StartChips = table.Column<int>(type: "int", nullable: false),
                    StartUnknown = table.Column<int>(type: "int", nullable: false),
                    StartTotal = table.Column<int>(type: "int", nullable: false),
                    GrindBubbles = table.Column<int>(type: "int", nullable: false),
                    GrindScratches = table.Column<int>(type: "int", nullable: false),
                    GrindParticles = table.Column<int>(type: "int", nullable: false),
                    GrindChips = table.Column<int>(type: "int", nullable: false),
                    GrindUnknown = table.Column<int>(type: "int", nullable: false),
                    GrindTotal = table.Column<int>(type: "int", nullable: false),
                    PolishBubbles = table.Column<int>(type: "int", nullable: false),
                    PolishScratches = table.Column<int>(type: "int", nullable: false),
                    PolishParticles = table.Column<int>(type: "int", nullable: false),
                    PolishChips = table.Column<int>(type: "int", nullable: false),
                    PolishUnknown = table.Column<int>(type: "int", nullable: false),
                    PolishTotal = table.Column<int>(type: "int", nullable: false),
                    CoatBubbles = table.Column<int>(type: "int", nullable: false),
                    CoatScratches = table.Column<int>(type: "int", nullable: false),
                    CoatParticles = table.Column<int>(type: "int", nullable: false),
                    CoatChips = table.Column<int>(type: "int", nullable: false),
                    CoatUnknown = table.Column<int>(type: "int", nullable: false),
                    CoatTotal = table.Column<int>(type: "int", nullable: false),
                    EtchBubbles = table.Column<int>(type: "int", nullable: false),
                    EtchScratches = table.Column<int>(type: "int", nullable: false),
                    EtchParticles = table.Column<int>(type: "int", nullable: false),
                    EtchChips = table.Column<int>(type: "int", nullable: false),
                    EtchUnknown = table.Column<int>(type: "int", nullable: false),
                    EtchTotal = table.Column<int>(type: "int", nullable: false),
                    DiceBubbles = table.Column<int>(type: "int", nullable: false),
                    DiceScratches = table.Column<int>(type: "int", nullable: false),
                    DiceParticles = table.Column<int>(type: "int", nullable: false),
                    DiceChips = table.Column<int>(type: "int", nullable: false),
                    DiceUnknown = table.Column<int>(type: "int", nullable: false),
                    DiceTotal = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UpcomingProductData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExpectedProducts = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpcomingProductData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tool = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WeeklyYieldData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Scraps = table.Column<int>(type: "int", nullable: false),
                    AverageYield = table.Column<int>(type: "int", nullable: false),
                    CoaterUptime = table.Column<int>(type: "int", nullable: false),
                    EtcherUptime = table.Column<int>(type: "int", nullable: false),
                    PolisherUptime = table.Column<int>(type: "int", nullable: false),
                    GrinderUptime = table.Column<int>(type: "int", nullable: false),
                    DicerUptime = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeeklyYieldData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductCommentData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCommentData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductCommentData_ProductData_ProductId",
                        column: x => x.ProductId,
                        principalTable: "ProductData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductCommentData_UserData_UserId",
                        column: x => x.UserId,
                        principalTable: "UserData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ToolData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ToolName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DtStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DtEnd = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ToolData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ToolData_UserData_UserId",
                        column: x => x.UserId,
                        principalTable: "UserData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductCommentData_ProductId",
                table: "ProductCommentData",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductCommentData_UserId",
                table: "ProductCommentData",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ToolData_UserId",
                table: "ToolData",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductCommentData");

            migrationBuilder.DropTable(
                name: "ToolData");

            migrationBuilder.DropTable(
                name: "UpcomingProductData");

            migrationBuilder.DropTable(
                name: "WeeklyYieldData");

            migrationBuilder.DropTable(
                name: "ProductData");

            migrationBuilder.DropTable(
                name: "UserData");
        }
    }
}
