using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TodoApi.DB
{
    public partial class MeeeTContext : DbContext
    {
        public MeeeTContext()
        {
        }

        public MeeeTContext(DbContextOptions<MeeeTContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Amigo> Amigo { get; set; }
        public virtual DbSet<Evento> Evento { get; set; }
        public virtual DbSet<Grupo> Grupo { get; set; }
        public virtual DbSet<Localização> Localização { get; set; }
        public virtual DbSet<Utilizador> Utilizador { get; set; }
        public virtual DbSet<UtilizadorEvento> UtilizadorEvento { get; set; }
        public virtual DbSet<UtilizadorGrupo> UtilizadorGrupo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=localhost;database=MeeeT;uid=root;pwd=password", x => x.ServerVersion("8.0.19-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Amigo>(entity =>
            {
                entity.ToTable("amigo");

                entity.HasIndex(e => e.UtilizadorId)
                    .HasName("fk_Amigo_Utilizador1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasColumnType("varchar(100)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.UtilizadorId).HasColumnName("Utilizador_id");

                entity.HasOne(d => d.Utilizador)
                    .WithMany(p => p.Amigo)
                    .HasForeignKey(d => d.UtilizadorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Amigo_Utilizador1");
            });

            modelBuilder.Entity<Evento>(entity =>
            {
                entity.ToTable("evento");

                entity.HasIndex(e => new { e.Longitude, e.Latitude })
                    .HasName("fk_Evento_Localização1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DataHora)
                    .HasColumnName("dataHora")
                    .HasColumnType("datetime");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("nome")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.L)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => new { d.Longitude, d.Latitude })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Evento_Localização1");
            });

            modelBuilder.Entity<Grupo>(entity =>
            {
                entity.ToTable("grupo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("nome")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<Localização>(entity =>
            {
                entity.HasKey(e => new { e.Longitude, e.Latitude })
                    .HasName("PRIMARY");

                entity.ToTable("localização");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Cidade)
                    .IsRequired()
                    .HasColumnName("cidade")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.País)
                    .IsRequired()
                    .HasColumnName("país")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Rua)
                    .IsRequired()
                    .HasColumnName("rua")
                    .HasColumnType("varchar(100)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<Utilizador>(entity =>
            {
                entity.ToTable("utilizador");

                entity.HasIndex(e => new { e.Longitude, e.Latitude })
                    .HasName("fk_Utilizador_Localização1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasColumnType("varchar(100)")
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.L)
                    .WithMany(p => p.Utilizador)
                    .HasForeignKey(d => new { d.Longitude, d.Latitude })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Utilizador_Localização1");
            });

            modelBuilder.Entity<UtilizadorEvento>(entity =>
            {
                entity.HasKey(e => new { e.IdUtilizador, e.IdEvento })
                    .HasName("PRIMARY");

                entity.ToTable("utilizador_evento");

                entity.HasIndex(e => e.IdEvento)
                    .HasName("fk_Utilizador_has_Evento_Evento1_idx");

                entity.HasIndex(e => e.IdUtilizador)
                    .HasName("fk_Utilizador_has_Evento_Utilizador1_idx");

                entity.Property(e => e.IdUtilizador).HasColumnName("id_utilizador");

                entity.Property(e => e.IdEvento).HasColumnName("id_evento");

                entity.HasOne(d => d.IdEventoNavigation)
                    .WithMany(p => p.UtilizadorEvento)
                    .HasForeignKey(d => d.IdEvento)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Utilizador_has_Evento_Evento1");

                entity.HasOne(d => d.IdUtilizadorNavigation)
                    .WithMany(p => p.UtilizadorEvento)
                    .HasForeignKey(d => d.IdUtilizador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Utilizador_has_Evento_Utilizador1");
            });

            modelBuilder.Entity<UtilizadorGrupo>(entity =>
            {
                entity.HasKey(e => new { e.IdUtilizador, e.IdGrupo })
                    .HasName("PRIMARY");

                entity.ToTable("utilizador_grupo");

                entity.HasIndex(e => e.IdGrupo)
                    .HasName("fk_Utilizador_has_Grupo_Grupo1_idx");

                entity.HasIndex(e => e.IdUtilizador)
                    .HasName("fk_Utilizador_has_Grupo_Utilizador1_idx");

                entity.Property(e => e.IdUtilizador).HasColumnName("id_utilizador");

                entity.Property(e => e.IdGrupo).HasColumnName("id_grupo");

                entity.HasOne(d => d.IdGrupoNavigation)
                    .WithMany(p => p.UtilizadorGrupo)
                    .HasForeignKey(d => d.IdGrupo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Utilizador_has_Grupo_Grupo1");

                entity.HasOne(d => d.IdUtilizadorNavigation)
                    .WithMany(p => p.UtilizadorGrupo)
                    .HasForeignKey(d => d.IdUtilizador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Utilizador_has_Grupo_Utilizador1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
