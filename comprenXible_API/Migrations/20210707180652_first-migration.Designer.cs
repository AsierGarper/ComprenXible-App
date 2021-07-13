﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using comprenXible_API.Data;

namespace comprenXible_API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20210707180652_first-migration")]
    partial class firstmigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("comprenXible_API.Models.Answer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Score")
                        .HasColumnType("float");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Answer");
                });

            modelBuilder.Entity("comprenXible_API.Models.ChatResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AnswerTime")
                        .HasColumnType("int");

                    b.Property<bool>("Pronouns")
                        .HasColumnType("bit");

                    b.Property<int>("ResultId")
                        .HasColumnType("int");

                    b.Property<string>("Rumination")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WordCount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("ChatResult");
                });

            modelBuilder.Entity("comprenXible_API.Models.CryptographicEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Dek")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DekIv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DekSalt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KekIv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KekSalt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserEmail")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CryptographicEntry");
                });

            modelBuilder.Entity("comprenXible_API.Models.KeyWord", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Score")
                        .HasColumnType("float");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("KeyWord");
                });

            modelBuilder.Entity("comprenXible_API.Models.KeyWordReiteration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ChatResultId")
                        .HasColumnType("int");

                    b.Property<int>("ChatResultsId")
                        .HasColumnType("int");

                    b.Property<int>("KeyWordId")
                        .HasColumnType("int");

                    b.Property<int>("Reiteration")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ChatResultId");

                    b.HasIndex("KeyWordId");

                    b.ToTable("KeyWordReiteration");
                });

            modelBuilder.Entity("comprenXible_API.Models.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Question");
                });

            modelBuilder.Entity("comprenXible_API.Models.QuestionsResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Anwers")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ResultId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ResultId")
                        .IsUnique();

                    b.ToTable("QuestionsResult");
                });

            modelBuilder.Entity("comprenXible_API.Models.Result", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ChatResultId")
                        .HasColumnType("int");

                    b.Property<int?>("ChatResultId1")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("QuestionResultId")
                        .HasColumnType("int");

                    b.Property<double>("Score")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("ChatResultId1");

                    b.ToTable("Result");
                });

            modelBuilder.Entity("comprenXible_API.Models.Test", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Score")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserId1")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId1");

                    b.ToTable("Test");
                });

            modelBuilder.Entity("comprenXible_API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HashedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("comprenXible_API.Models.KeyWordReiteration", b =>
                {
                    b.HasOne("comprenXible_API.Models.ChatResult", "ChatResult")
                        .WithMany("KeyWords")
                        .HasForeignKey("ChatResultId");

                    b.HasOne("comprenXible_API.Models.KeyWord", "KeyWord")
                        .WithMany("Reiteration")
                        .HasForeignKey("KeyWordId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ChatResult");

                    b.Navigation("KeyWord");
                });

            modelBuilder.Entity("comprenXible_API.Models.QuestionsResult", b =>
                {
                    b.HasOne("comprenXible_API.Models.Result", null)
                        .WithOne("QuestionsResult")
                        .HasForeignKey("comprenXible_API.Models.QuestionsResult", "ResultId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("comprenXible_API.Models.Result", b =>
                {
                    b.HasOne("comprenXible_API.Models.ChatResult", "ChatResult")
                        .WithMany()
                        .HasForeignKey("ChatResultId1");

                    b.Navigation("ChatResult");
                });

            modelBuilder.Entity("comprenXible_API.Models.Test", b =>
                {
                    b.HasOne("comprenXible_API.Models.User", "User")
                        .WithMany("Tests")
                        .HasForeignKey("UserId1");

                    b.Navigation("User");
                });

            modelBuilder.Entity("comprenXible_API.Models.ChatResult", b =>
                {
                    b.Navigation("KeyWords");
                });

            modelBuilder.Entity("comprenXible_API.Models.KeyWord", b =>
                {
                    b.Navigation("Reiteration");
                });

            modelBuilder.Entity("comprenXible_API.Models.Result", b =>
                {
                    b.Navigation("QuestionsResult");
                });

            modelBuilder.Entity("comprenXible_API.Models.User", b =>
                {
                    b.Navigation("Tests");
                });
#pragma warning restore 612, 618
        }
    }
}
