using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TodoApi.DB
{
    public partial class meeetdbContext : DbContext
    {
        public meeetdbContext()
        {
        }

        public meeetdbContext(DbContextOptions<meeetdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Amigo> Amigo { get; set; }
        public virtual DbSet<Convites> Convites { get; set; }
        public virtual DbSet<Evento> Evento { get; set; }
        public virtual DbSet<EventoHasRequests> EventoHasRequests { get; set; }
        public virtual DbSet<Grupo> Grupo { get; set; }
        public virtual DbSet<Localização> Localização { get; set; }
        public virtual DbSet<Opcao> Opcao { get; set; }
        public virtual DbSet<PedidosAmizade> PedidosAmizade { get; set; }
        public virtual DbSet<RequestEvento> RequestEvento { get; set; }
        public virtual DbSet<Utilizador> Utilizador { get; set; }
        public virtual DbSet<UtilizadorConvites> UtilizadorConvites { get; set; }
        public virtual DbSet<UtilizadorEvento> UtilizadorEvento { get; set; }
        public virtual DbSet<UtilizadorGrupo> UtilizadorGrupo { get; set; }
        public virtual DbSet<UtilizadorOpcao> UtilizadorOpcao { get; set; }
        public virtual DbSet<UtilizadorPedidosAmizade> UtilizadorPedidosAmizade { get; set; }
        public virtual DbSet<Votacao> Votacao { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:meeetdbserver.database.windows.net,1433;Initial Catalog=meeetdb;Persist Security Info=False;User ID=meeet;Password= Sporting1906;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Amigo>(entity =>
            {
                entity.ToTable("amigo", "meeet");

                entity.HasIndex(e => e.UtilizadorId)
                    .HasName("fk_Amigo_Utilizador1_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(100);

                entity.Property(e => e.UtilizadorId).HasColumnName("Utilizador_id");

                entity.HasOne(d => d.Utilizador)
                    .WithMany(p => p.Amigo)
                    .HasForeignKey(d => d.UtilizadorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("amigo$fk_Amigo_Utilizador1");
            });

            modelBuilder.Entity<Convites>(entity =>
            {
                entity.HasKey(e => e.IdConvidador)
                    .HasName("PK_convites_id_convidador");

                entity.ToTable("convites", "meeet");

                entity.Property(e => e.IdConvidador)
                    .HasColumnName("id_convidador")
                    .ValueGeneratedNever();

                entity.Property(e => e.IdEvento).HasColumnName("id_evento");
            });

            modelBuilder.Entity<Evento>(entity =>
            {
                entity.ToTable("evento", "meeet");

                entity.HasIndex(e => e.IdAdmin)
                    .HasName("fk_Evento_Utilizador1_idx");

                entity.HasIndex(e => e.Local)
                    .HasName("fk_Evento_Localização1_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.DataHora)
                    .HasColumnName("dataHora")
                    .HasColumnType("datetime2(0)");

                entity.Property(e => e.Descricao)
                    .HasColumnName("descricao")
                    .HasMaxLength(300);

                entity.Property(e => e.IdAdmin).HasColumnName("id_admin");

                entity.Property(e => e.IdadeMinima).HasColumnName("idade_minima");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Local)
                    .IsRequired()
                    .HasColumnName("local")
                    .HasMaxLength(100);

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("nome")
                    .HasMaxLength(45);

                entity.Property(e => e.TipoEvento).HasColumnName("tipo_evento");

                entity.HasOne(d => d.IdAdminNavigation)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => d.IdAdmin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("evento$fk_Evento_Utilizador1");

                entity.HasOne(d => d.LocalNavigation)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => d.Local)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("evento$fk_Evento_Localização1");
            });

            modelBuilder.Entity<EventoHasRequests>(entity =>
            {
                entity.HasKey(e => new { e.EventoId, e.IdUserRequest })
                    .HasName("PK_evento_has_requests_Evento_id");

                entity.ToTable("evento_has_requests", "meeet");

                entity.HasIndex(e => e.EventoId)
                    .HasName("fk_Evento_has_Request_evento_Evento1_idx");

                entity.HasIndex(e => e.IdUserRequest)
                    .HasName("fk_Evento_has_Request_evento_Request_evento1_idx");

                entity.Property(e => e.EventoId).HasColumnName("Evento_id");

                entity.Property(e => e.IdUserRequest).HasColumnName("id_user_request");

                entity.HasOne(d => d.Evento)
                    .WithMany(p => p.EventoHasRequests)
                    .HasForeignKey(d => d.EventoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("evento_has_requests$fk_Evento_has_Request_evento_Evento1");

                entity.HasOne(d => d.IdUserRequestNavigation)
                    .WithMany(p => p.EventoHasRequests)
                    .HasForeignKey(d => d.IdUserRequest)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("evento_has_requests$fk_Evento_has_Request_evento_Request_evento1");
            });

            modelBuilder.Entity<Grupo>(entity =>
            {
                entity.ToTable("grupo", "meeet");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("nome")
                    .HasMaxLength(45);
            });

            modelBuilder.Entity<Localização>(entity =>
            {
                entity.HasKey(e => e.Rua)
                    .HasName("PK_localização_rua");

                entity.ToTable("localização", "meeet");

                entity.Property(e => e.Rua)
                    .HasColumnName("rua")
                    .HasMaxLength(100);

                entity.Property(e => e.Cidade)
                    .IsRequired()
                    .HasColumnName("cidade")
                    .HasMaxLength(45);

                entity.Property(e => e.País)
                    .IsRequired()
                    .HasColumnName("país")
                    .HasMaxLength(45);
            });

            modelBuilder.Entity<Opcao>(entity =>
            {
                entity.HasKey(e => e.IdOpcao)
                    .HasName("PK_opcao_idOpcao");

                entity.ToTable("opcao", "meeet");

                entity.HasIndex(e => e.IdVotacao)
                    .HasName("fk_Opcao_Votacao1_idx");

                entity.Property(e => e.IdOpcao)
                    .HasColumnName("idOpcao")
                    .ValueGeneratedNever();

                entity.Property(e => e.IdVotacao).HasColumnName("idVotacao");

                entity.Property(e => e.Opcao1)
                    .IsRequired()
                    .HasColumnName("opcao")
                    .HasMaxLength(45);

                entity.HasOne(d => d.IdVotacaoNavigation)
                    .WithMany(p => p.Opcao)
                    .HasForeignKey(d => d.IdVotacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("opcao$fk_Opcao_Votacao1");
            });

            modelBuilder.Entity<PedidosAmizade>(entity =>
            {
                entity.HasKey(e => e.IdUserSend)
                    .HasName("PK_pedidos_amizade_id_user_send");

                entity.ToTable("pedidos_amizade", "meeet");

                entity.Property(e => e.IdUserSend)
                    .HasColumnName("id_user_send")
                    .ValueGeneratedNever();
            });

            modelBuilder.Entity<RequestEvento>(entity =>
            {
                entity.HasKey(e => e.IdUserRequest)
                    .HasName("PK_request_evento_id_user_request");

                entity.ToTable("request_evento", "meeet");

                entity.Property(e => e.IdUserRequest)
                    .HasColumnName("id_user_request")
                    .ValueGeneratedNever();
            });

            modelBuilder.Entity<Utilizador>(entity =>
            {
                entity.ToTable("utilizador", "meeet");

                entity.HasIndex(e => e.Morada)
                    .HasName("fk_Utilizador_Localização1_idx");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Bio)
                    .HasColumnName("bio")
                    .HasMaxLength(1000);

                entity.Property(e => e.DataNascimento)
                    .HasColumnName("data_nascimento")
                    .HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(45);

                entity.Property(e => e.Genero)
                    .IsRequired()
                    .HasColumnName("genero")
                    .HasMaxLength(45);

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Morada)
                    .IsRequired()
                    .HasColumnName("morada")
                    .HasMaxLength(100);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(45);

                entity.Property(e => e.UrlFoto)
                    .IsRequired()
                    .HasColumnName("url_foto")
                    .HasMaxLength(200);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(100);

                entity.HasOne(d => d.MoradaNavigation)
                    .WithMany(p => p.Utilizador)
                    .HasForeignKey(d => d.Morada)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador$fk_Utilizador_Localização1");
            });

            modelBuilder.Entity<UtilizadorConvites>(entity =>
            {
                entity.HasKey(e => new { e.IdUser, e.IdConvidador })
                    .HasName("PK_utilizador_convites_id_user");

                entity.ToTable("utilizador_convites", "meeet");

                entity.HasIndex(e => e.IdConvidador)
                    .HasName("fk_Utilizador_has_Convites_Convites1_idx");

                entity.HasIndex(e => e.IdUser)
                    .HasName("fk_Utilizador_has_Convites_Utilizador1_idx");

                entity.Property(e => e.IdUser).HasColumnName("id_user");

                entity.Property(e => e.IdConvidador).HasColumnName("id_convidador");

                entity.HasOne(d => d.IdConvidadorNavigation)
                    .WithMany(p => p.UtilizadorConvites)
                    .HasForeignKey(d => d.IdConvidador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_convites$fk_Utilizador_has_Convites_Convites1");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.UtilizadorConvites)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_convites$fk_Utilizador_has_Convites_Utilizador1");
            });

            modelBuilder.Entity<UtilizadorEvento>(entity =>
            {
                entity.HasKey(e => new { e.IdUtilizador, e.IdEvento })
                    .HasName("PK_utilizador_evento_id_utilizador");

                entity.ToTable("utilizador_evento", "meeet");

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
                    .HasConstraintName("utilizador_evento$fk_Utilizador_has_Evento_Evento1");

                entity.HasOne(d => d.IdUtilizadorNavigation)
                    .WithMany(p => p.UtilizadorEvento)
                    .HasForeignKey(d => d.IdUtilizador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_evento$fk_Utilizador_has_Evento_Utilizador1");
            });

            modelBuilder.Entity<UtilizadorGrupo>(entity =>
            {
                entity.HasKey(e => new { e.IdUtilizador, e.IdGrupo })
                    .HasName("PK_utilizador_grupo_id_utilizador");

                entity.ToTable("utilizador_grupo", "meeet");

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
                    .HasConstraintName("utilizador_grupo$fk_Utilizador_has_Grupo_Grupo1");

                entity.HasOne(d => d.IdUtilizadorNavigation)
                    .WithMany(p => p.UtilizadorGrupo)
                    .HasForeignKey(d => d.IdUtilizador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_grupo$fk_Utilizador_has_Grupo_Utilizador1");
            });

            modelBuilder.Entity<UtilizadorOpcao>(entity =>
            {
                entity.HasKey(e => new { e.IdUser, e.IdOpcao })
                    .HasName("PK_utilizador_opcao_id_user");

                entity.ToTable("utilizador_opcao", "meeet");

                entity.HasIndex(e => e.IdOpcao)
                    .HasName("fk_Utilizador_has_Opcao_Opcao1_idx");

                entity.HasIndex(e => e.IdUser)
                    .HasName("fk_Utilizador_has_Opcao_Utilizador1_idx");

                entity.Property(e => e.IdUser).HasColumnName("id_user");

                entity.Property(e => e.IdOpcao).HasColumnName("id_opcao");

                entity.HasOne(d => d.IdOpcaoNavigation)
                    .WithMany(p => p.UtilizadorOpcao)
                    .HasForeignKey(d => d.IdOpcao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_opcao$fk_Utilizador_has_Opcao_Opcao1");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.UtilizadorOpcao)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_opcao$fk_Utilizador_has_Opcao_Utilizador1");
            });

            modelBuilder.Entity<UtilizadorPedidosAmizade>(entity =>
            {
                entity.HasKey(e => new { e.IdReceive, e.IdSend })
                    .HasName("PK_utilizador_pedidos_amizade_id_receive");

                entity.ToTable("utilizador_pedidos_amizade", "meeet");

                entity.HasIndex(e => e.IdReceive)
                    .HasName("fk_Utilizador_has_Pedidos_amizade_Utilizador1_idx");

                entity.HasIndex(e => e.IdSend)
                    .HasName("fk_Utilizador_has_Pedidos_amizade_Pedidos_amizade1_idx");

                entity.Property(e => e.IdReceive).HasColumnName("id_receive");

                entity.Property(e => e.IdSend).HasColumnName("id_send");

                entity.HasOne(d => d.IdReceiveNavigation)
                    .WithMany(p => p.UtilizadorPedidosAmizade)
                    .HasForeignKey(d => d.IdReceive)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_pedidos_amizade$fk_Utilizador_has_Pedidos_amizade_Utilizador1");

                entity.HasOne(d => d.IdSendNavigation)
                    .WithMany(p => p.UtilizadorPedidosAmizade)
                    .HasForeignKey(d => d.IdSend)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilizador_pedidos_amizade$fk_Utilizador_has_Pedidos_amizade_Pedidos_amizade1");
            });

            modelBuilder.Entity<Votacao>(entity =>
            {
                entity.HasKey(e => e.IdVotacao)
                    .HasName("PK_votacao_idVotacao");

                entity.ToTable("votacao", "meeet");

                entity.HasIndex(e => e.IdEvento)
                    .HasName("fk_Votacao_Evento1_idx");

                entity.Property(e => e.IdVotacao)
                    .HasColumnName("idVotacao")
                    .ValueGeneratedNever();

                entity.Property(e => e.IdEvento).HasColumnName("id_evento");

                entity.Property(e => e.Tipo).HasColumnName("tipo");

                entity.HasOne(d => d.IdEventoNavigation)
                    .WithMany(p => p.Votacao)
                    .HasForeignKey(d => d.IdEvento)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("votacao$fk_Votacao_Evento1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
