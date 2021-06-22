package br.com.ftt.capacitacao.sociotorcedor.domain.dependente;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import br.com.ftt.capacitacao.sociotorcedor.core.Entity.AbstractEntity;
import br.com.ftt.capacitacao.sociotorcedor.domain.auth.Auth;

@Entity
@Table(name = "dependente")
@Getter
@Setter
public class Dependente extends AbstractEntity {
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

}
