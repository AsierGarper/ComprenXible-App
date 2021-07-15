USE [master]
GO

/****** Object:  Database [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]    Script Date: 15/07/2021 11:06:59 ******/
CREATE DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4', FILENAME = N'C:\Users\asier\ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4_log', FILENAME = N'C:\Users\asier\ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET ARITHABORT OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET AUTO_CLOSE ON 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET  ENABLE_BROKER 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET READ_COMMITTED_SNAPSHOT ON 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET  MULTI_USER 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET DB_CHAINING OFF 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET QUERY_STORE = OFF
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO

ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO

ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO

ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO

ALTER DATABASE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4] SET  READ_WRITE 
GO


USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[Answer]    Script Date: 15/07/2021 11:07:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Answer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[Score] [float] NOT NULL,
 CONSTRAINT [PK_Answer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[ChatResult]    Script Date: 15/07/2021 11:07:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ChatResult](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AnswerTime] [int] NOT NULL,
	[Rumination] [nvarchar](max) NULL,
	[Pronouns] [bit] NOT NULL,
	[WordCount] [int] NOT NULL,
	[ResultId] [int] NOT NULL,
 CONSTRAINT [PK_ChatResult] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[CryptographicEntry]    Script Date: 15/07/2021 11:08:03 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CryptographicEntry](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserEmail] [varbinary](50) NULL,
	[Dek] [varbinary](50) NULL,
	[DekIv] [varbinary](50) NULL,
	[DekSalt] [varbinary](50) NULL,
	[KekIv] [varbinary](50) NULL,
	[KekSalt] [varbinary](50) NULL,
	[SecSalt] [varbinary](50) NULL,
 CONSTRAINT [PK_CriptographicEntry] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[KeyWord]    Script Date: 15/07/2021 11:08:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[KeyWord](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[Score] [float] NOT NULL,
 CONSTRAINT [PK_KeyWord] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[KeyWordReiteration]    Script Date: 15/07/2021 11:08:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[KeyWordReiteration](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Reiteration] [int] NOT NULL,
	[KeyWordId] [int] NOT NULL,
	[ChatResultsId] [int] NOT NULL,
	[ChatResultId] [int] NULL,
 CONSTRAINT [PK_KeyWordReiteration] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[KeyWordReiteration]  WITH CHECK ADD  CONSTRAINT [FK_KeyWordReiteration_ChatResult_ChatResultId] FOREIGN KEY([ChatResultId])
REFERENCES [dbo].[ChatResult] ([Id])
GO

ALTER TABLE [dbo].[KeyWordReiteration] CHECK CONSTRAINT [FK_KeyWordReiteration_ChatResult_ChatResultId]
GO

ALTER TABLE [dbo].[KeyWordReiteration]  WITH CHECK ADD  CONSTRAINT [FK_KeyWordReiteration_KeyWord_KeyWordId] FOREIGN KEY([KeyWordId])
REFERENCES [dbo].[KeyWord] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[KeyWordReiteration] CHECK CONSTRAINT [FK_KeyWordReiteration_KeyWord_KeyWordId]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[Question]    Script Date: 15/07/2021 11:08:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Question](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[QuestionsResult]    Script Date: 15/07/2021 11:08:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[QuestionsResult](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Anwers] [nvarchar](max) NULL,
	[ResultId] [int] NOT NULL,
 CONSTRAINT [PK_QuestionsResult] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[QuestionsResult]  WITH CHECK ADD  CONSTRAINT [FK_QuestionsResult_Result_ResultId] FOREIGN KEY([ResultId])
REFERENCES [dbo].[Result] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[QuestionsResult] CHECK CONSTRAINT [FK_QuestionsResult_Result_ResultId]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[Result]    Script Date: 15/07/2021 11:08:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Result](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[Score] [float] NOT NULL,
	[QuestionResultId] [int] NOT NULL,
	[ChatResultId] [int] NOT NULL,
	[ChatResultId1] [int] NULL,
 CONSTRAINT [PK_Result] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Result]  WITH CHECK ADD  CONSTRAINT [FK_Result_ChatResult_ChatResultId1] FOREIGN KEY([ChatResultId1])
REFERENCES [dbo].[ChatResult] ([Id])
GO

ALTER TABLE [dbo].[Result] CHECK CONSTRAINT [FK_Result_ChatResult_ChatResultId1]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[Test]    Script Date: 15/07/2021 11:09:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Test](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Score] [varbinary](50) NULL,
	[Date] [varbinary](50) NULL,
	[UserId] [nvarchar](max) NULL,
	[UserId1] [int] NULL,
	[UserEmail] [varbinary](50) NULL,
 CONSTRAINT [PK_Test] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Test]  WITH CHECK ADD  CONSTRAINT [FK_Test_User_UserId1] FOREIGN KEY([UserId1])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[Test] CHECK CONSTRAINT [FK_Test_User_UserId1]
GO

USE [ApplicationDbContext-408e25c7-8cbf-4af4-92ca-37cc6e4194d4]
GO

/****** Object:  Table [dbo].[User]    Script Date: 15/07/2021 11:09:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varbinary](50) NULL,
	[HashedEmail] [varbinary](50) NULL,
	[Gender] [varbinary](50) NULL,
	[Email] [varbinary](50) NULL,
	[Password] [varbinary](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

