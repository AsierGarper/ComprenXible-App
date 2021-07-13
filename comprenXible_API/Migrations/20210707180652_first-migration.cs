using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace comprenXible_API.Migrations
{
    public partial class firstmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Answer",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Score = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChatResult",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AnswerTime = table.Column<int>(type: "int", nullable: false),
                    Rumination = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pronouns = table.Column<bool>(type: "bit", nullable: false),
                    WordCount = table.Column<int>(type: "int", nullable: false),
                    ResultId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatResult", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CryptographicEntry",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dek = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DekIv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DekSalt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KekIv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KekSalt = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CryptographicEntry", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "KeyWord",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Score = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KeyWord", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Question",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Question", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HashedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Result",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Score = table.Column<double>(type: "float", nullable: false),
                    QuestionResultId = table.Column<int>(type: "int", nullable: false),
                    ChatResultId = table.Column<int>(type: "int", nullable: false),
                    ChatResultId1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Result", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Result_ChatResult_ChatResultId1",
                        column: x => x.ChatResultId1,
                        principalTable: "ChatResult",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "KeyWordReiteration",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reiteration = table.Column<int>(type: "int", nullable: false),
                    KeyWordId = table.Column<int>(type: "int", nullable: false),
                    ChatResultsId = table.Column<int>(type: "int", nullable: false),
                    ChatResultId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KeyWordReiteration", x => x.Id);
                    table.ForeignKey(
                        name: "FK_KeyWordReiteration_ChatResult_ChatResultId",
                        column: x => x.ChatResultId,
                        principalTable: "ChatResult",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_KeyWordReiteration_KeyWord_KeyWordId",
                        column: x => x.KeyWordId,
                        principalTable: "KeyWord",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Test",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Score = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Test", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Test_User_UserId1",
                        column: x => x.UserId1,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "QuestionsResult",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Anwers = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ResultId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuestionsResult", x => x.Id);
                    table.ForeignKey(
                        name: "FK_QuestionsResult_Result_ResultId",
                        column: x => x.ResultId,
                        principalTable: "Result",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_KeyWordReiteration_ChatResultId",
                table: "KeyWordReiteration",
                column: "ChatResultId");

            migrationBuilder.CreateIndex(
                name: "IX_KeyWordReiteration_KeyWordId",
                table: "KeyWordReiteration",
                column: "KeyWordId");

            migrationBuilder.CreateIndex(
                name: "IX_QuestionsResult_ResultId",
                table: "QuestionsResult",
                column: "ResultId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Result_ChatResultId1",
                table: "Result",
                column: "ChatResultId1");

            migrationBuilder.CreateIndex(
                name: "IX_Test_UserId1",
                table: "Test",
                column: "UserId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Answer");

            migrationBuilder.DropTable(
                name: "CryptographicEntry");

            migrationBuilder.DropTable(
                name: "KeyWordReiteration");

            migrationBuilder.DropTable(
                name: "Question");

            migrationBuilder.DropTable(
                name: "QuestionsResult");

            migrationBuilder.DropTable(
                name: "Test");

            migrationBuilder.DropTable(
                name: "KeyWord");

            migrationBuilder.DropTable(
                name: "Result");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "ChatResult");
        }
    }
}
