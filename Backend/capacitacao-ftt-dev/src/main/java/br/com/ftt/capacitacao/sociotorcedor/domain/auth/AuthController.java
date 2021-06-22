package br.com.ftt.capacitacao.sociotorcedor.domain.auth;

import br.com.ftt.capacitacao.sociotorcedor.core.Controller.AbrastractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController extends AbrastractController<Auth> {
}
