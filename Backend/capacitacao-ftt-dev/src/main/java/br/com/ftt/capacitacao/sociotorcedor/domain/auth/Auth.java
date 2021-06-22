package br.com.ftt.capacitacao.sociotorcedor.domain.auth;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.format.annotation.DateTimeFormat;

import br.com.ftt.capacitacao.sociotorcedor.core.Entity.AbstractEntity;
import br.com.ftt.capacitacao.sociotorcedor.domain.dependente.Dependente;

import java.util.List;

@Entity
@Table(name = "auth")
@Getter
@Setter
public class Auth extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "nome")
    private String nome;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "email")
    private String email;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "senha")
    private String senha;

    @NotNull
    @Size(min = 11, max = 11)
    @Column(name = "cpf")
    private String cpf;

    @NotEmpty
    @NotBlank
    @Size(max = 15)
    @Column(name = "rgrne")
    private String rgrne;

    @NotEmpty
    @NotBlank
    @Column(name = "dataNascimento")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private String dataNascimento;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "nacionalidade")
    private String nacionalidade;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "estadoEmissor")
    private String estadoEmissor;

}