import { Dependencies } from "./dependencies";
import { YesNoHttpRepository } from "./infrastructure/yes-no-http-repository";
import { YesNoDtoToYesNoMapper } from "./infrastructure/yes-no-dto-to-yes-no-mapper";
import { Http } from "./infrastructure/http";

export const dependencyTree: Dependencies = {
  yesNoRepository: new YesNoHttpRepository(
    new YesNoDtoToYesNoMapper(),
    new Http(window.fetch.bind(window))
  )
};
