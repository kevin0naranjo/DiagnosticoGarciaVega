// constants.ts
import { AIApp, Project, ViewType } from "./types";

export const AI_APPLICATIONS: AIApp[] = [
  {
    title: "Captura y Estandarización",
    description: "(Document AI)",
    impactArea: "Document AI",
    icon: "1",
  },
  {
    title: "Predicción / Forecasting",
    description: "(Machine Learning)",
    impactArea: "Machine Learning",
    icon: "2",
  },
  {
    title: "Optimización de Inventario",
    description: "(Planning)",
    impactArea: "Planning",
    icon: "3",
  },
  {
    title: "Análisis y Control",
    description: "(Anomaly Detection)",
    impactArea: "Anomaly Detection",
    icon: "4",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Diagnóstico de Clientes",
    description: "Quick Win",
    impact: 8,
    effort: 3,
    category: "Quick Win",
    budget: "—",
    timeline: "2-3 meses",
    scalability: "—",
    isQuickWin: true,
    deepDive: {
      title: "Diagnóstico de Clientes",
      baseInfo:
        "Base de costos: Afectaciones y pérdidas causadas por no pagos de créditos",
      phases: [
        {
          phase:
            "Fase 1: Recopilación de Información financiera y relevante para el diagnóstico",
          status:
            "El proceso de recopilación de documentos financieros es lento, ineficiente, y provoca abandonos constantes. Falta de criterios para la aprobación de clientes.",
          opportunity:
            "Existen plataformas que recopilan gran parte de la información que solicitan manualmente",
          initiative:
            "Integración de plataformas externas + recopilación automática + diagnóstico sugerido (reglas/score).",
          automationPotential: "50-80%",
          impact:
            "40-60% FTE, 5-8% Aumento de aprobaciones, Reducción de pérdidas de 10-15%",
          kpis: "",
        },
        {
          phase: "Fase 2: Proceso de seguimiento y control de cobro",
          status:
            "Inatención de los plazos de pago de clientes morosos, y pérdidas en cobro de seguros",
          opportunity: "La revisión de los plazos de pago es automatizable",
          initiative:
            "Revisión automática de condiciones de pago. Sistema de alertas en caso de mora.",
          automationPotential: "50-90%",
          impact: "",
          kpis: "",
        },
      ],
      recommendation: {
        title: "Impacto",
        text:
          "Impacto\n" +
          "▪ Se estima impacto importante en reducción de pérdidas por clientes morosos y siniestros de 10-15%.\n" +
          "▪ También en aumento de aprobaciones de financiamiento de clientes por un 5-8%.\n\n" +
          "Ahorro de Tiempo\n" +
          "El proceso de recopilación de documentación y aprobación de financiamiento es innecesariamente largo y manual. Se estima un ahorro significativo entre el 40-60% en este tiempo.\n\n" +
          "Valor Añadido\n" +
          "▪ Mejores criterios de selección y tiempos más rápidos permitirán un crecimiento de clientes de financiamiento.\n" +
          "▪ Un sistema de alertas de cobro oportuno permitirá el poder tomar acciones minimizando las pérdidas.\n\n" +
          "Otros KPI relevantes de Éxito\n" +
          "▪ Porcentaje de Siniestros\n" +
          "▪ Pérdidas por no pago\n" +
          "▪ Tiempo de aprobación\n" +
          "▪ Tiempo de Recopilación\n" +
          "▪ Porcentaje de clientes Aprobados\n\n" +
          "Requerimientos Funcionales\n" +
          "▪ Lista de documentos y criterios actualmente utilizados en el proceso de evaluación.\n" +
          "▪ Estandarización de proceso de evaluación de clientes, incluyendo responsables y definición de campos mínimos.\n\n" +
          "Requerimientos Técnicos\n" +
          "▪ Acceso y documentación de API del ERP.\n" +
          "▪ Datos relevantes para el seguimiento de cobros y clientes dentro del sistema.\n\n" +
          "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
      },
    },
  },
  {
    id: "p2",
    name: "Forecasting de Alquiler y Ventas",
    description: "Big Swing",
    impact: 9,
    effort: 8,
    category: "Big Swing",
    budget: "—",
    timeline: "8-10 meses",
    scalability: "—",
    isQuickWin: false,
    deepDive: {
      title: "Forecasting de Alquiler y Ventas",
      phases: [
        {
          phase: "Fase 1: Levantamiento de Información y Generación de ETL",
          status:
            "Información relevante para la planeación de Inventario, Insumos, y Logística, se encuentra fragmentada, inexistente, o es poco precisa.",
          opportunity:
            "El análisis de la información disponible, así como la unificación y recopilación de nuevos datos, permitirían un análisis y predicción más preciso y significativo.",
          initiative:
            "Centralización de datos relevantes. Asignación de variables clave en la predicción. Generación de Pipeline de ETL. Creación de conjunto de datos y dependencias de mantenimiento.\n\n% de base de ingresos: ~70%",
          automationPotential: "40-80%",
          impact:
            "5-20% FTE\n5-15% reducción problemas disponibilidad,\n10-20% Reducción Logística Emergencia,\n5-10% Reducción Costos de Stock Estacionario\nStock de Seguridad",
          kpis: "",
        },
        {
          phase: "Fase 2: Forecasting de alquiler y ventas (v1.0)",
          status:
            "Planeación de Inventario, Insumos, y Logística reactiva, sin comunicación entre sedes. Análisis estadístico es llevado a cabo, pero con información incompleta y/o fragmentada.",
          opportunity:
            "Un modelo de IA podría realizar un análisis basado en la información disponible y dar un estimado de alquiler y ventas.",
          initiative:
            "Pronóstico demanda por sede/familia con horizonte de 1-4 semanas.\n\n% de base de ingresos: ~70%",
          automationPotential: "20-60%",
          impact: "",
          kpis: "",
        },
        {
          phase: "Fase 3: Forecasting de Retornos probables",
          status:
            "Los retornos de inventario llegan de forma imprevisible, generando desorganización en la planeación de personal y retraso en las tareas de control de inventario",
          opportunity:
            "Un modelo probabilístico / ML puede analizar el comportamiento y anticipar la probabilidad de retorno",
          initiative:
            "Pronóstico de retornos de inventario por sede/familia.\n\n% de base de ingresos: ~70%",
          automationPotential: "15-60%",
          impact: "",
          kpis: "",
        },
        {
          phase: "Fase 4: Sistema de recomendación de traslado de Stock",
          status:
            "La comunicación entre sedes dificulta el proceso de optimización de inventario, generando stock estacionario que es necesitado en otras sedes.",
          opportunity:
            "Es posible asistir a la planeación logística de traslados mediante un análisis por IA, teniendo en cuenta los sistemas de predicción y la información de inventario de sedes.",
          initiative:
            "Alertas de stock de seguridad por sede, recomendaciones de traslado acorde a posibles alquileres / ventas, recomendaciones de agenda de traslado.\n\n% de base de ingresos: ~70%",
          automationPotential: "20-40%",
          impact: "",
          kpis: "",
        },
      ],
      recommendation: {
        title: "Impacto",
        text:
          "Impacto\n" +
          "▪ 5-15% Reducción de Pérdidas por Disponibilidad\n" +
          "▪ 10-20% Reducción de costos de Logística de Emergencia\n" +
          "▪ 5-10% Reducción de costos de Stock Estacionario\n\n" +
          "Ahorro de Tiempo\n" +
          "Ahorro sustancial de tiempo en el personal de planeación en un 5-20%FTE.\n\n" +
          "Valor Añadido\n" +
          "▪ Criterios para definir un Stock de Seguridad\n" +
          "▪ Optimización de traslados\n\n" +
          "Otros KPI relevantes de Éxito\n" +
          "▪ OTIF (On Time in Full),\n" +
          "▪ Fill-Rate\n" +
          "▪ Porcentaje de Inventario Estacionario\n" +
          "▪ Stock de Seguridad\n" +
          "▪ Latencia de Información\n" +
          "▪ Porcentaje de Datos Completos\n" +
          "▪ Porcentaje de Negocios Perdidos por Disponibilidad\n\n" +
          "Requerimientos Funcionales\n" +
          "▪ Criterios y proceso actual de planeación de Stock de Seguridad, Predicción de demanda y alquiler.\n\n" +
          "Requerimientos Técnicos\n" +
          "▪ Datos relevantes del ciclo de vida de los productos en ERP, movimientos de inventario, órdenes, e históricos de alquiler y venta.\n" +
          "▪ Catálogo de productos / Familias.\n\n" +
          "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
      },
    },
  },
  {
    id: "p3",
    name: "Medición de Rendimiento Humano",
    description: "Gestión de Personal",
    impact: 8,
    effort: 3,
    category: "Gestión de Talento Humano",
    budget: "—",
    timeline: "2-3 meses",
    scalability: "—",
    isQuickWin: true,
    deepDive: {
      title: "Medición de Rendimiento Humano",
      baseInfo:
        "Base de costos: 140-160 operativos representan un estimado de 5.040 – 5.760M Pesos Colombianos / Año",
      phases: [
        {
          phase: "Fase 1: Puntos de control",
          status:
            "Programación de tareas informal y reactiva; medición de rendimiento manual o inexistente; tiempos muertos no visibles ni cuantificados.",
          opportunity:
            "Digitalizar un registro de actividades y tiempos habilita productividad real por hora-hombre.",
          initiative:
            "Interfaz que permita registrar inicio/fin de cada tarea de cargue y descargue.",
          automationPotential: "30-70% (Asistencia por lider)",
          impact:
            "5-15% Capacidad Efectiva\n% Actividades Registradas,\n%Datos Completos, Tareas / Hora, Promedio Tareas / Hora, Eficiencia",
          kpis: "",
        },
        {
          phase: "Fase 2: Correlación con Reingresos",
          status:
            "Labores de reingreso son manuales y no se realizan en conjunto con el análisis de rendimiento de los trabajadores.",
          opportunity:
            "Se puede realizar el proceso de reingresos durante el registro de actividades, permitiendo la cuantificación de cargue/descargue de producto/familia por hora por empleado.",
          initiative:
            "cuantificar eficiencia por producto/familia cargado/descargado de forma automática",
          automationPotential: "30-70% (Asistencia por lider)",
          impact:
            "% Actividades Registradas, %Datos Completos, Tareas / Hora, Promedio Tareas / Hora, Eficiencia",
          kpis: "",
        },
        {
          phase: "Fase 3: Dashboard de productividad y cumplimiento de plan diario",
          status:
            "Sin KPIs comparables, es difícil mejorar y dimensionar capacidad. Así mismo, imposibilita la toma de medidas.",
          opportunity:
            "Analítica permite redistribuir carga, reducir cuellos de botella y aumentar productividad",
          initiative:
            "Dashboard de productividad, tiempos muertos, cumplimiento de plan de trabajo, causas de cambio.",
          automationPotential: "--",
          impact: "% Actividades Registradas, %Datos Completos, Tareas / Hora",
          kpis: "",
        },
        {
          phase: "Fase 4: Incentivos variables con métricas confiables",
          status: "Compensación desconectada de productividad real.",
          opportunity:
            "Métricas precisas permiten incentivos justos y formación focalizada.",
          initiative:
            "Modelo de incentivos por objetivo y productividad + alertas de seguridad.",
          automationPotential: "--",
          impact:
            "5-10% Capacidad Efectiva\n% Actividades Registradas,\n%Datos Completos, Tareas / Hora, Promedio Tareas / Hora",
          kpis: "",
        },
      ],
      recommendation: {
        title: "Impacto",
        text:
          "Impacto\n" +
          "▪ 5-15% capacidad efectiva por visibilizar actividad real + reducir tiempos muertos.\n" +
          "Mejora del cumplimiento diario\n" +
          "▪ 5-10% capacidad efectiva adicional con incentivos justos y formación focalizada.\n\n" +
          "Ahorro de Tiempo\n" +
          "Menos “tiempos muertos” por búsqueda de información, confirmaciones y correcciones\n\n" +
          "Valor Añadido\n" +
          "▪ Registro manual → digitalización con apoyo del líder: automatizable 30-70% (captura guiada + validaciones).\n" +
          "▪ Menos tiempo “apagando incendios” por falta de priorización y secuenciación de tareas.\n\n" +
          "Requerimientos Funcionales\n" +
          "▪ Definir “tareas estándar” (catálogo): cargue, descargue, alistamiento, reingreso, ubicación, mantenimiento, etc.\n" +
          "▪ Definir reglas de medición: pausas, tiempos improductivos, cambio de tarea, reasignaciones.\n" +
          "▪ Definir objetivos por turno (plan diario) y causas de desviación (motivos predefinidos).\n\n" +
          "Requerimientos Técnicos\n" +
          "▪ Interfaz (móvil/tablet/kiosco) para inicio/fin de tarea + validación por líder. Dependen de la labor en cuestión\n\n" +
          "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
      },
    },
  },
  {
    id: "p4",
    name: "Automatización de Reingresos",
    description: "Big Swing",
    impact: 9,
    effort: 8,
    category: "Big Swing",
    budget: "—",
    timeline: "8-10 meses",
    scalability: "—",
    isQuickWin: false,
    deepDive: {
      title: "Automatización de Reingresos",
      baseInfo:
        "Base de costos: 140-160 operativos representan un estimado de 5.040 – 5.760M Pesos Colombianos / Año",
      phases: [
        {
          phase: "Fase 1: Automatización de reingresos de inventario",
          status:
            "Reintegros se cuantifican múltiples veces en formatos no estandarizados, manuales, y con alta latencia de digitalización",
          opportunity: "Es una actividad altamente automatizable",
          initiative:
            "Asistencia en el proceso de reintegro de inventario con una actualización de datos inmediata en ERP. Pre selección del inventario a ingresar por proyecto.\n\n% de base de ingresos: ~70%",
          automationPotential: "40-75%",
          impact:
            "30-70% FTE\nDedicado a esta tarea\n50 – 130M Pesos Colombianos",
          kpis: "",
        },
        {
          phase:
            "Fase 2: Conexión entre áreas mediante alertas / Notificaciones y Dashboard General",
          status:
            "Baja comunicación entre áreas sobre novedades de pedidos, inventario, requerimientos, etc.",
          opportunity:
            "La comunicación efectiva entre líderes, representantes, y otro personal, permitiría una mejor planeación logística, de inventario, y comercial",
          initiative:
            "Notificaciones de alertas de inventario, stock, mantenimiento, y otras métricas de interés, así como proyecciones.\n\n% de base de ingresos: ~70%",
          automationPotential: "30-70%",
          impact: "",
          kpis: "",
        },
      ],
      recommendation: {
        title: "Impacto",
        text:
          "Impacto\n" +
          "50 – 130 M Pesos Colombianos\n\n" +
          "Ahorro de Tiempo\n" +
          "Operativos dedicados a múltiples recuentos y digitalización pueden ahorrar entre 30-70% de su tiempo.\n\n" +
          "Valor Añadido\n" +
          "▪ Actualización inmediata en ERP al momento del reintegro.\n" +
          "▪ Herramientas para mejor planeación de stock y disponibilidad.\n" +
          "▪ Mayor Trazabilidad: quién reintegró, qué, cuándo, en qué estado, y con evidencia.\n\n" +
          "Otros KPI Relevantes de Éxito\n" +
          "▪ Porcentaje de datos completos\n" +
          "▪ Latencia de Actualización de datos\n" +
          "▪ OTIF (On Time in Full)\n" +
          "▪ Fill-Rate\n" +
          "▪ Porcentaje Traslados de Emergencia,\n" +
          "▪ Porcentaje de Negocios Perdidos por disponibilidad\n\n" +
          "Requerimientos Funcionales\n" +
          "▪ Estandarizar flujo de trabajo de reingresos para todas las sedes, incluyendo datos obligatorios de reintegro, responsables y estados.\n\n" +
          "Requerimientos Técnicos\n" +
          "▪ Acceso y documentación API del ERP para actualizar movimientos.\n" +
          "▪ Datos relevantes de proyectos en curso para Integración a nivel nacional.\n\n" +
          "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
      },
    },
  },
  {
    id: "p5",
    name: "Digitalización Comercial",
    description: "Quick Win",
    impact: 8,
    effort: 3,
    category: "Quick Win",
    budget: "—",
    timeline: "2-3 meses",
    scalability: "—",
    isQuickWin: true,
    deepDive: {
      title: "Digitalización Comercial",
      baseInfo:
        "Base de costos: 17 representantes cuestan alrededor de 612M Pesos Colombianos / Año",
      phases: [
        {
          phase: "Fase 1: Proceso de cotización estándar para el área de comercial",
          status:
            "Datos segregados a través de ERP, Informes de Excel y Word, con alta latencia en la digitalización de la información en la ERP, y en ocasiones perdidas de datos",
          opportunity:
            "Un formato de cotización adecuado puede permitir la automatización de ingesta de datos por parte de la ERP y una disponibilidad confiable de datos en tiempo real",
          initiative:
            "Subida automática de la información en cotizaciones a la ERP\n\n% de base de ingresos: ~70%",
          automationPotential: "40-70%",
          impact: "+30% FTE,\n70 - 120 M pesos Colombianos / Año",
          kpis: "",
        },
        {
          phase: "Fase 2: Separación del inventario por cotizaciones",
          status:
            "Logística de inventario no es consciente de los posibles pedidos, generando sobrecostos en transporte y deficiencias en la planeación del inventario",
          opportunity:
            "La planeación de inventario no posee indicadores que permitan la actuación y planeación óptima. Siendo un proceso sumamente reactivo.",
          initiative:
            "Separación del inventario disponible y sugerencia de stock de seguridad en función de las cotizaciones vigentes en tiempo real\n\n% de base de ingresos: ~70%",
          automationPotential: "60-90%",
          impact: "",
          kpis: "",
        },
      ],
      recommendation: {
        title: "Impacto",
        text:
          "Impacto\n" +
          "70 – 120 M Pesos Colombianos\n\n" +
          "Ahorro de Tiempo\n" +
          "La actualización de cotizaciones en ERP toma una porción alta del tiempo de cada representante comercial, proceso automatizable entre el 40-70%, reduciendo la latencia de la información drásticamente.\n\n" +
          "Valor Añadido\n" +
          "▪ La disponibilidad de la información de forma inmediata abre las puertas a una mejor planeación de inventario, movimientos inter-sede, y proporciona un insumo para un cálculo de stock de seguridad.\n" +
          "▪ Se prevé reducción de pérdidas en negocios perdidos, transportes de emergencia, y aumento de ventas, cuyo estimado no está incluido en el impacto inicial.\n\n" +
          "Otros KPI relevantes de Éxito\n" +
          "▪ Latencia de Actualización.\n" +
          "▪ Porcentaje Campos Completos.\n" +
          "▪ OTIF (On Time in Full)\n" +
          "▪ Fill-Rate\n" +
          "▪ Porcentaje Transporte de Emergencia\n" +
          "▪ Negocios Perdidos por disponibilidad\n" +
          "▪ Ventas\n\n" +
          "Requerimientos Funcionales\n" +
          "▪ Estandarización de procedimiento de cotización comercial en un formato único.\n" +
          "▪ Uso sostenido y consistente de las herramientas propuestas, incluyendo campos obligatorios por orden / cotización.\n\n" +
          "Requerimientos Técnicos\n" +
          "▪ Acceso y documentación de API del ERP.\n\n" +
          "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
      },
    },
  },
];

/**
 * Qué proyectos se muestran en cada vista Deep Dive (ProjectDetail)
 */
export const VIEW_PROJECT_IDS: Partial<Record<ViewType, string[]>> = {
  "quick-wins": ["p5", "p1", "p3"],
  "commercial-digitalization": ["p5"],
  "returns-automation": ["p4"],
};

/*
Tipos de IA Aplicables
1 Captura y Estandarización (Document AI)
2 Predicción / Forecasting (Machine Learning)
3 Optimización de Inventario (Planning)
4 Análisis y Control (Anomaly Detection)

Iniciativas AI

Quick Wins – Altamente Recomendados
▪ Digitalización Comercial
▪ Diagnóstico de Clientes
▪ Gestión de Personal

Big Swings
▪ Automatización de Reingresos
▪ Forecasting de Alquiler / Ventas

Nice to Have
▪ No se formulan proyectos de bajo impacto y bajo esfuerzo

Deprioritize – No recomendado
▪ Cambio del sistema ERP.
  Se requiere una curva de aprendizaje larga, que el uso de ERP esté integrado actualmente en los procesos, y que los datos actuales sean un reflejo de la operación.

Road Map
Digitalización de Comercial — 2-3 meses — Quick Win
Diagnóstico de Clientes — 2-3 meses — Quick Win
Gestión de Talento Humano — 2-3 meses — Quick Win
Automatización de Reingresos — 8-10 meses — Big Swing
Forecasting de Alquiler y Ventas — 8-10 meses — Big Swing

Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes
*/
