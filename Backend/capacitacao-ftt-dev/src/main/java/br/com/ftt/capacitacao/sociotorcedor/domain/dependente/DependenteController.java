package br.com.ftt.capacitacao.sociotorcedor.domain.dependente;

import br.com.ftt.capacitacao.sociotorcedor.core.Controller.AbrastractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dependente")
public class DependenteController extends AbrastractController<Dependente> {
}
