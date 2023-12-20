import { validateEnv } from './utils/common';

import { Namespace } from './types/enums';

export default validateEnv(
  (window as any).env ?? {
    NAMESPACE: Namespace.DEVELOPMENT,
    FDK_BASE_URI: 'https://staging.fellesdatakatalog.digdir.no',
    SSO_HOST: 'https://sso.staging.fellesdatakatalog.digdir.no',
    SKE_THEME_PROFILE: '910244132',
    FDK_REGISTRATION_BASE_URI:
      'https://registrering.staging.fellesdatakatalog.digdir.no',
    ADMIN_GUI_BASE_URI: 'https://admin.staging.fellesdatakatalog.digdir.no',
    DATASERVICE_CATALOG_BASE_URI:
      'https://dataservice-catalog.staging.fellesdatakatalog.digdir.no',
    CONCEPT_REGISTRATION_HOST:
      'https://registrering-begrep.staging.fellesdatakatalog.digdir.no',
    CONCEPT_CATALOG_BASE_URI:
      'https://concept-catalog.staging.fellesdatakatalog.digdir.no',
    DATASET_CATALOG_BASE_URI:
      'https://dataset-catalog.staging.fellesdatakatalog.digdir.no',
    RECORDS_OF_PROCESSING_ACTIVITIES_BASE_URI:
      'https://registrering-protokoll.staging.fellesdatakatalog.digdir.no',
    FDK_COMMUNITY_BASE_URI:
      'https://community.staging.fellesdatakatalog.digdir.no/',
    FDK_CMS_BASE_URI: 'https://cms.fellesdatakatalog.digdir.no',
    CATALOG_ADMIN_BASE_URI:
      'https://catalog-admin.staging.fellesdatakatalog.digdir.no',
    SERVICE_CATALOG_BASE_URI:
      'https://service-catalog.api.staging.fellesdatakatalog.digdir.no',
    SERVICE_CATALOG_GUI_BASE_URI:
      'https://service-catalog.staging.fellesdatakatalog.digdir.no',
    USE_DEMO_LOGO: false
  }
);
