package solutions.egen.app;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/api")
public class RestappConfig extends ResourceConfig {

	public RestappConfig() {
		packages("solutions.egen.rest");
	}
}
