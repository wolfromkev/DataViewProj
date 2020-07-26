using Microsoft.EntityFrameworkCore.Migrations;

namespace DataViewBackend.Migrations
{
    public partial class migration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventTask",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssignerId = table.Column<int>(type: "int", nullable: false),
                    AssignerName = table.Column<int>(type: "int", nullable: false),
                    AssigneeId = table.Column<int>(type: "int", nullable: false),
                    AssigneeName = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Start = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    End = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTask", x => x.Id);
                });

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
                name: "ToolDowntime",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssignerId = table.Column<int>(type: "int", nullable: false),
                    AssignerName = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Start = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    End = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tool = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ToolDowntime", x => x.Id);
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
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventTask");

            migrationBuilder.DropTable(
                name: "ProductData");

            migrationBuilder.DropTable(
                name: "ToolDowntime");

            migrationBuilder.DropTable(
                name: "UpcomingProductData");

            migrationBuilder.DropTable(
                name: "UserData");

            migrationBuilder.DropTable(
                name: "WeeklyYieldData");
        }
    }
}
