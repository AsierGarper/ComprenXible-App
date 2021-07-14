using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace comprenXible_API.Migrations
{
    public partial class fourth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Test_User_UserId1",
                table: "Test");

            migrationBuilder.DropIndex(
                name: "IX_Test_UserId1",
                table: "Test");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Test");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Test",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "UserEmail",
                table: "Test",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Test_UserId",
                table: "Test",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Test_User_UserId",
                table: "Test",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Test_User_UserId",
                table: "Test");

            migrationBuilder.DropIndex(
                name: "IX_Test_UserId",
                table: "Test");

            migrationBuilder.DropColumn(
                name: "UserEmail",
                table: "Test");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Test",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "Test",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Test_UserId1",
                table: "Test",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Test_User_UserId1",
                table: "Test",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
