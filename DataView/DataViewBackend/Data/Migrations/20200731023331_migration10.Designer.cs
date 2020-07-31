﻿// <auto-generated />
using System;
using DataViewBackend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DataViewBackend.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200731023331_migration10")]
    partial class migration10
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.0-preview.6.20312.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DataViewBackend.Models.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AssignerId")
                        .HasColumnType("int");

                    b.Property<string>("AssignerName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("End")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Start")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Event");
                });

            modelBuilder.Entity("DataViewBackend.Models.JoinTables.EventUsers", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("EventId")
                        .HasColumnType("int");

                    b.Property<int?>("UserDataId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "EventId");

                    b.HasIndex("EventId");

                    b.HasIndex("UserDataId");

                    b.ToTable("EventUsers");
                });

            modelBuilder.Entity("DataViewBackend.Models.ProductData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CoatBubbles")
                        .HasColumnType("int");

                    b.Property<int>("CoatChips")
                        .HasColumnType("int");

                    b.Property<int>("CoatParticles")
                        .HasColumnType("int");

                    b.Property<int>("CoatScratches")
                        .HasColumnType("int");

                    b.Property<int>("CoatTotal")
                        .HasColumnType("int");

                    b.Property<int>("CoatUnknown")
                        .HasColumnType("int");

                    b.Property<int>("DiceBubbles")
                        .HasColumnType("int");

                    b.Property<int>("DiceChips")
                        .HasColumnType("int");

                    b.Property<int>("DiceParticles")
                        .HasColumnType("int");

                    b.Property<int>("DiceScratches")
                        .HasColumnType("int");

                    b.Property<int>("DiceTotal")
                        .HasColumnType("int");

                    b.Property<int>("DiceUnknown")
                        .HasColumnType("int");

                    b.Property<int>("EtchBubbles")
                        .HasColumnType("int");

                    b.Property<int>("EtchChips")
                        .HasColumnType("int");

                    b.Property<int>("EtchParticles")
                        .HasColumnType("int");

                    b.Property<int>("EtchScratches")
                        .HasColumnType("int");

                    b.Property<int>("EtchTotal")
                        .HasColumnType("int");

                    b.Property<int>("EtchUnknown")
                        .HasColumnType("int");

                    b.Property<string>("FinishTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GrindBubbles")
                        .HasColumnType("int");

                    b.Property<int>("GrindChips")
                        .HasColumnType("int");

                    b.Property<int>("GrindParticles")
                        .HasColumnType("int");

                    b.Property<int>("GrindScratches")
                        .HasColumnType("int");

                    b.Property<int>("GrindTotal")
                        .HasColumnType("int");

                    b.Property<int>("GrindUnknown")
                        .HasColumnType("int");

                    b.Property<int>("PolishBubbles")
                        .HasColumnType("int");

                    b.Property<int>("PolishChips")
                        .HasColumnType("int");

                    b.Property<int>("PolishParticles")
                        .HasColumnType("int");

                    b.Property<int>("PolishScratches")
                        .HasColumnType("int");

                    b.Property<int>("PolishTotal")
                        .HasColumnType("int");

                    b.Property<int>("PolishUnknown")
                        .HasColumnType("int");

                    b.Property<int>("StartBubbles")
                        .HasColumnType("int");

                    b.Property<int>("StartChips")
                        .HasColumnType("int");

                    b.Property<int>("StartParticles")
                        .HasColumnType("int");

                    b.Property<int>("StartScratches")
                        .HasColumnType("int");

                    b.Property<string>("StartTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StartTotal")
                        .HasColumnType("int");

                    b.Property<int>("StartUnknown")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("ProductData");
                });

            modelBuilder.Entity("DataViewBackend.Models.Task", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AssigneeId")
                        .HasColumnType("int");

                    b.Property<string>("AssigneeName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("AssignerId")
                        .HasColumnType("int");

                    b.Property<string>("AssignerName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Completed")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("End")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Start")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Task");
                });

            modelBuilder.Entity("DataViewBackend.Models.UpcomingProductData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ExpectedProducts")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("UpcomingProductData");
                });

            modelBuilder.Entity("DataViewBackend.Models.UserData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("Image")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserDescription")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("UserData");
                });

            modelBuilder.Entity("DataViewBackend.Models.WeeklyYieldData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AverageYield")
                        .HasColumnType("int");

                    b.Property<int>("CoaterUptime")
                        .HasColumnType("int");

                    b.Property<int>("DicerUptime")
                        .HasColumnType("int");

                    b.Property<int>("EtcherUptime")
                        .HasColumnType("int");

                    b.Property<int>("GrinderUptime")
                        .HasColumnType("int");

                    b.Property<int>("PolisherUptime")
                        .HasColumnType("int");

                    b.Property<int>("Scraps")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("WeeklyYieldData");
                });

            modelBuilder.Entity("DataViewBackend.Models.JoinTables.EventUsers", b =>
                {
                    b.HasOne("DataViewBackend.Models.Event", "Event")
                        .WithMany("Invitees")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataViewBackend.Models.UserData", "UserData")
                        .WithMany("Events")
                        .HasForeignKey("UserDataId");
                });
#pragma warning restore 612, 618
        }
    }
}
