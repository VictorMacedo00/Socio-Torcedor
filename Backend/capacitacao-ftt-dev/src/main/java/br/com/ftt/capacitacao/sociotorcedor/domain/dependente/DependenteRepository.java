package br.com.ftt.capacitacao.sociotorcedor.domain.dependente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DependenteRepository extends JpaRepository<Dependente, Long> {
}
