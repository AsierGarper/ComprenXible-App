using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace comprenXible_API.Migrations
{
    public partial class thirdcryptomigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "SecSalt",
                table: "CryptographicEntry",
                type: "varbinary(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SecSalt",
                table: "CryptographicEntry");
        }
    }
}
