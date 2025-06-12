import { CourseStep } from "@/components/course/Course";
import { StepsType } from "@/enums";

export const steps: CourseStep[] = [
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/MBmDOEk-6uY",
    title: "Video explicativo 1",
    section: "Sección 1: Introducción"
  },
  {
    type: StepsType.LINK,
    url: "https://human.biodigital.com/view?id=6BKM&lang=en&ref=share",
    title: "Exploración 1",
    section: "Sección 1: Introducción"
  },
  {
    type: StepsType.VIDEO,
    url: "https://www.youtube.com/watch?v=uwZhytn71SA",
    title: "Viaje a través del Sistema Respiratorio 1",
    section: "Sección 1: Introducción"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/6jtLxKgsdQw",
    title: "Video explicativo 2",
    section: "Sección 2: Anatomía de las Vías Respiratorias Superiores"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/gUqPnmuTgTg",
    title: "Video explicativo 3",
    section: "Sección 3: Anatomía de las Vías Respiratorias Inferiores"
  },
  {
    type: StepsType.VIDEO,
    url: "https://www.youtube.com/watch?v=uUpdItCbr24",
    title: "Anatomía Microscópica Pulmonar",
    section: "Sección 3: Anatomía de las Vías Respiratorias Inferiores"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/uDZnaDDKEK8",
    title: "Video explicativo 4",
    section: "Sección 4: Los Pulmones y la Cavidad Torácica"
  },
  {
    type: StepsType.LINK,
    url: "https://www.turbosquid.com/es/3d-models/human-rib-cage-respiratory-3d-model/638811",
    title: "Exploración 2",
    section: "Sección 4: Los Pulmones y la Cavidad Torácica"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/nE16HrngaFQ",
    title: "Video explicativo 5",
    section: "Sección 5: Vascularización del Sistema Respiratorio"
  },
  {
    type: StepsType.VIDEO,
    url: "https://www.youtube.com/watch?v=735VnxjWMJY",
    title: "Visualización del intercambio gaseoso a nivel de los capilares alveolares.",
    section: "Sección 5: Vascularización del Sistema Respiratorio"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/TcmvrWJeavw",
    title: "Video explicativo 6",
    section: "Sección 6: Mecanismos de respiración"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/RSHTnIftAGY",
    title: "Video explicativo 7",
    section: "Sección 7: Fisiología de la respiración"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/trDvtMUrW1w",
    title: "Video explicativo 7.1",
    section: "Sección 7: Fisiología de la respiración"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/cNkiobp3z0k",
    title: "Video explicativo 8",
    section: "Sección 8: Asma"
  },
  {
    type: StepsType.VIDEO,
    url: "https://www.youtube.com/watch?si=P3sQEzRtPK0XOyV0&v=vNp115RbAA8&feature=youtu.be",
    title: "Video explicativo 8.1",
    section: "Sección 8: Asma"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/mZ0JwfjrB20",
    title: "Video explicativo 8.2",
    section: "Sección 8: Asma"
  },
  {
    type: StepsType.LINK,
    url: "https://www.tiktok.com/@gescon2/video/7294723269645618438?_t=ZS-8w7PORIxlai&_r=1",
    title: "Video explicativo 8.3",
    section: "Sección 8: Asma"
  },
  {
    type: StepsType.VIDEO,
    url: "https://youtu.be/odUxm9gAlK4",
    title: "Video explicativo 8.4",
    section: "Sección 8: Asma"
  },
  {
    type: StepsType.QUIZ,
    title: "Evaluación Módulo No.1 - Asma",
    section: "Sección 8: Asma",
    config: {
      quizTitle: "Evaluación Módulo No.1 - Asma",
      quizSynopsis: "Indicaciones: Para avanzar se tendrá que pasar el examen con puntaje de aciertos mínimo de 60%",
      progressBarColor: "#f2a65a",
      nrOfQuestions: "5",
      questions: [
        {
          question:
            "¿Cuál de los siguientes mecanismos fisiopatológicos es característico del asma y contribuye directamente a la obstrucción del flujo aéreo?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Disminución de la producción de moco",
            "Vasodilatación de los vasos sanguíneos pulmonares",
            "Broncoconstricción del músculo liso bronquial",
            "Aumento de la elasticidad pulmonar"
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correcto. La broncoconstricción es un mecanismo clave en el asma.",
          messageForIncorrectAnswer: "Incorrecto. Revisa los mecanismos fisiopatológicos del asma.",
          explanation:
            "La broncoconstricción del músculo liso bronquial es uno de los principales responsables de la obstrucción del flujo aéreo en pacientes asmáticos.",
          point: "1"
        },
        {
          question:
            "¿Qué clase de medicamentos se consideran de primera línea para el alivio rápido de los síntomas agudos de una crisis de asma?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Corticoides sistémicos",
            "Broncodilatadores de acción corta (SABA)",
            "Anticolinérgicos de acción prolongada",
            "Inhibidores de leucotrienos"
          ],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correcto. Los SABA son la primera línea en crisis agudas.",
          messageForIncorrectAnswer: "Incorrecto. Considera el uso inmediato y de acción rápida en una crisis.",
          explanation:
            "Los SABA, como el salbutamol, son usados para el alivio rápido de los síntomas en las crisis asmáticas.",
          point: "1"
        },
        {
          question:
            "Según la escala de Pulmonary Score, ¿qué puntuación indicaría una crisis de asma de gravedad moderada?",
          questionType: "text",
          answerSelectionType: "single",
          answers: ["≤ 3", "4-6", "≥ 7", "8-14"],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correcto. La puntuación entre 4 y 6 indica gravedad moderada.",
          messageForIncorrectAnswer: "Incorrecto. Revisa la interpretación de la escala Pulmonary Score.",
          explanation: "La escala de Pulmonary Score categoriza de 4 a 6 como una crisis moderada.",
          point: "1"
        },
        {
          question:
            "Durante la evaluación inicial de un paciente con una crisis de asma, ¿cuál de los siguientes signos sugeriría un riesgo vital inminente?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Frecuencia respiratoria de 25 respiraciones por minuto",
            "Saturación de oxígeno (SatO₂) del 92%",
            "Presencia de sibilancias audibles en ambos campos pulmonares",
            "Confusión y disminución del nivel de conciencia"
          ],
          correctAnswer: "4",
          messageForCorrectAnswer: "Correcto. Los signos neurológicos indican gravedad extrema.",
          messageForIncorrectAnswer: "Incorrecto. Considera los signos de hipoxia grave o compromiso neurológico.",
          explanation: "La confusión o disminución del estado de conciencia indica hipoxia severa y riesgo vital.",
          point: "1"
        },
        {
          question:
            "Una vez que un paciente ha respondido al tratamiento de una crisis de asma, ¿qué criterio es importante considerar para el alta hospitalaria?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Persistencia de sibilancias ocasionales",
            "Uso frecuente de broncodilatadores de rescate",
            "PEF o FEV1 > 70% del valor predicho o del mejor personal",
            "Necesidad de continuar con oxigenoterapia domiciliaria"
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correcto. Este es un criterio aceptado para valorar el alta.",
          messageForIncorrectAnswer: "Incorrecto. Revisa los criterios fisiológicos usados para decidir el alta.",
          explanation:
            "Un PEF o FEV1 superior al 70% indica buena respuesta terapéutica y permite considerar el alta médica.",
          point: "1"
        }
      ]
    }
  },
  {
    type: StepsType.VIDEO,
    title: "Video explicativo 9",
    url: "https://youtu.be/YTRX7LV9hQk",
    section: "Sección 9: Neumonía"
  },
  {
    type: StepsType.LINK,
    title: "Prezi 9.1",
    url: "https://www.google.com/url?q=https://prezi.com/view/zbVxa66e5qkLH5ck5BtV/&sa=D&source=docs&ust=1749686993256963&usg=AOvVaw2DW5jF2_5FjDUFXHylzEQJ",
    section: "Sección 9: Neumonía"
  },
  {
    type: StepsType.LINK,
    title: "Video explicativo 9.2",
    url: "https://www.tiktok.com/@jeymedic/video/7480504551028608261?_t=ZS-8w7PuG20K4V&_r=1",
    section: "Sección 9: Neumonía"
  },
  {
    type: StepsType.VIDEO,
    title: "Video explicativo 9.3",
    url: "https://youtu.be/q-cWYXp3CNo",
    section: "Sección 9: Neumonía"
  },
  {
    type: StepsType.LINK,
    title: "Presentación 9.4",
    url: "https://view.genially.com/68493aa77f446fe15c7b407b/interactive-content-intervencion-de-enfermeria ",
    section: "Sección 9: Neumonía"
  },
  {
    type: StepsType.QUIZ,
    title: "Evaluación Módulo No.2 - Neumonía",
    section: "Sección 9: Neumonía",
    config: {
      quizTitle: "Evaluación Módulo No.2 - Neumonía Adquirida en la Comunidad (NAC)",
      quizSynopsis:
        "Paciente masculino de 68 años, con antecedentes de hipertensión arterial y diabetes tipo 2, acude a urgencias por presentar fiebre de 39 °C, tos productiva con esputo amarillo verdoso, disnea progresiva y dolor torácico al respirar profundo. A la exploración física se encuentra taquicárdico (FC 105 lpm), taquipneico (FR 28 rpm), con SatO2 del 87% en aire ambiente. En la auscultación pulmonar se detectan crépitos en base pulmonar derecha. La radiografía de tórax muestra consolidación en lóbulo inferior derecho. Se diagnostica neumonía adquirida en la comunidad (NAC).",
      progressBarColor: "#7bc67e",
      nrOfQuestions: "3",
      questions: [
        {
          question:
            "Paciente masculino de 68 años, con antecedentes de hipertensión arterial y diabetes tipo 2, acude a urgencias por presentar fiebre de 39 °C, tos productiva con esputo amarillo verdoso, disnea progresiva y dolor torácico al respirar profundo. A la exploración física se encuentra taquicárdico (FC 105 lpm), taquipneico (FR 28 rpm), con SatO2 del 87% en aire ambiente. En la auscultación pulmonar se detectan crépitos en base pulmonar derecha. La radiografía de tórax muestra consolidación en lóbulo inferior derecho. Se diagnostica neumonía adquirida en la comunidad (NAC). Pregunta: ¿Cuál es la acción inmediata más adecuada en este paciente tras la evaluación inicial?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Iniciar antibioticoterapia",
            "Administrar oxigenoterapia suplementaria",
            "Solicitar tomografía de tórax",
            "Iniciar fisioterapia respiratoria"
          ],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correcto. La oxigenoterapia es una prioridad ante la hipoxemia.",
          messageForIncorrectAnswer: "Incorrecto. Prioriza la oxigenación del paciente en casos de hipoxia.",
          explanation:
            "Una SatO₂ del 87% indica hipoxemia. La oxigenoterapia es esencial para estabilizar al paciente antes de otras intervenciones.",
          point: "1"
        },
        {
          question:
            "Paciente masculino de 68 años, con antecedentes de hipertensión arterial y diabetes tipo 2, acude a urgencias por presentar fiebre de 39 °C, tos productiva con esputo amarillo verdoso, disnea progresiva y dolor torácico al respirar profundo. A la exploración física se encuentra taquicárdico (FC 105 lpm), taquipneico (FR 28 rpm), con SatO2 del 87% en aire ambiente. En la auscultación pulmonar se detectan crépitos en base pulmonar derecha. La radiografía de tórax muestra consolidación en lóbulo inferior derecho. Se diagnostica neumonía adquirida en la comunidad (NAC). Pregunta: Un paciente con neumonía recibe oxigenoterapia por mascarilla con reservorio a 10 L/min. La SatO₂ mejora a 94%. ¿Qué acción de enfermería es prioritaria en este momento?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Cambiar a cánula nasal inmediatamente para mayor comodidad",
            "Mantener el flujo actual y monitorear saturación y signos de toxicidad por oxígeno",
            "Disminuir el flujo a 5 L/min para evitar dependencia al oxígeno",
            "Suspender el oxígeno si el paciente ya no se queja de disnea"
          ],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correcto. Es necesario mantener la oxigenación adecuada y vigilar al paciente.",
          messageForIncorrectAnswer: "Incorrecto. El manejo de oxígeno requiere monitoreo continuo.",
          explanation:
            "Aunque la SatO₂ mejora, se debe mantener el tratamiento mientras se monitorean parámetros clínicos y evitar complicaciones como la toxicidad por oxígeno.",
          point: "1"
        },
        {
          question:
            "Paciente masculino de 68 años, con antecedentes de hipertensión arterial y diabetes tipo 2, acude a urgencias por presentar fiebre de 39 °C, tos productiva con esputo amarillo verdoso, disnea progresiva y dolor torácico al respirar profundo. A la exploración física se encuentra taquicárdico (FC 105 lpm), taquipneico (FR 28 rpm), con SatO2 del 87% en aire ambiente. En la auscultación pulmonar se detectan crépitos en base pulmonar derecha. La radiografía de tórax muestra consolidación en lóbulo inferior derecho. Se diagnostica neumonía adquirida en la comunidad (NAC). Pregunta: El paciente presenta fiebre de 39 °C, tos productiva con esputo amarillo verdoso y dolor torácico. ¿Cuál de los siguientes exámenes sería el más indicado para confirmar la etiología bacteriana de la neumonía?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Radiografía de tórax",
            "Hemograma completo",
            "Hemocultivos y cultivo de esputo",
            "Gasometría arterial"
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correcto. La identificación del patógeno guía el tratamiento antibiótico.",
          messageForIncorrectAnswer: "Incorrecto. Se requiere un estudio microbiológico para confirmar etiología.",
          explanation:
            "Los cultivos permiten identificar el agente causal de la infección, lo cual es clave para un tratamiento dirigido.",
          point: "1"
        }
      ]
    }
  },
  {
    type: StepsType.VIDEO,
    title: "Video explicativo 10",
    url: "https://youtu.be/mVhg2Xs5Z5s",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)"
  },
  {
    type: StepsType.LINK,
    title: "Prezi 10.1",
    url: "https://prezi.com/view/184E55prL6CAb0KDQYbf/",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)"
  },
  {
    type: StepsType.LINK,
    title: "Video explicativo 10.2",
    url: "https://www.tiktok.com/@medicademiaonline/video/7495147920740650245?_r=1&_t=ZS-8w7QdMDf1dA",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)"
  },
  {
    type: StepsType.LINK,
    title: "Prezi 10.3",
    url: "https://prezi.com/view/184E55prL6CAb0KDQYbf/",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)"
  },
  {
    type: StepsType.LINK,
    title: "Video explicativo 10.4",
    url: "https://www.tiktok.com/@medicademiaonline/video/7496261155766291767?_t=ZS-8w7QpjpGNip&_r=1",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)"
  },
  {
    type: StepsType.LINK,
    title: "Presentación 10.5",
    url: "https://prezi.com/view/184E55prL6CAb0KDQYbf/",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)"
  },
  {
    type: StepsType.QUIZ,
    title: "Evaluación Módulo No.3 - EPOC",
    section: "Sección 10: EPOC ( Enfermedad Pulmonar Obstructiva Crónica)",
    config: {
      quizTitle: "Evaluación Módulo No.3 - Exacerbación Aguda de EPOC",
      quizSynopsis:
        "Doña Sofía, de 68 años, con diagnóstico de EPOC GOLD IV (muy grave) y enfisema predominante, usuaria crónica de oxígeno domiciliario (2 litros/minuto por cánula nasal), es traída al servicio de urgencias por su hija debido a un empeoramiento súbito de su disnea, confusión mental progresiva y somnolencia en las últimas 12 horas. Antecedentes: Hipertensión arterial, cardiopatía isquémica, y múltiples hospitalizaciones previas por exacerbaciones de EPOC. Refiere pobre adherencia a su medicación inhalada y niega fiebre o expectoración purulenta reciente.",
      progressBarColor: "#f7b267",
      nrOfQuestions: "5",
      questions: [
        {
          question:
            "Doña Sofía, de 68 años, con diagnóstico de EPOC GOLD IV (muy grave) y enfisema predominante, usuaria crónica de oxígeno domiciliario (2 litros/minuto por cánula nasal), es traída al servicio de urgencias por su hija debido a un empeoramiento súbito de su disnea, confusión mental progresiva y somnolencia en las últimas 12 horas. Antecedentes: Hipertensión arterial, cardiopatía isquémica, y múltiples hospitalizaciones previas por exacerbaciones de EPOC. Refiere pobre adherencia a su medicación inhalada y niega fiebre o expectoración purulenta reciente. \n Pregunta: Ante la confusión y somnolencia de Doña Sofía, ¿cuál es la intervención de enfermería prioritaria inmediata?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Administrar una dosis adicional de su broncodilatador de acción larga.",
            "Aumentar el flujo de oxígeno a 4 litros por minuto.",
            "Evaluar la permeabilidad de la vía aérea y el patrón respiratorio.",
            "Realizar una valoración neurológica detallada utilizando la escala de Glasgow."
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correcto. Lo primero es garantizar la vía aérea y evaluar la respiración.",
          messageForIncorrectAnswer: "Incorrecto. La prioridad es la evaluación respiratoria.",
          explanation:
            "En casos de alteración del estado de conciencia, lo primero es asegurar que la vía aérea esté permeable y que la respiración sea adecuada.",
          point: "1"
        },
        {
          question:
            "Doña Sofía, de 68 años, con diagnóstico de EPOC GOLD IV (muy grave) y enfisema predominante, usuaria crónica de oxígeno domiciliario (2 litros/minuto por cánula nasal), es traída al servicio de urgencias por su hija debido a un empeoramiento súbito de su disnea, confusión mental progresiva y somnolencia en las últimas 12 horas. Antecedentes: Hipertensión arterial, cardiopatía isquémica, y múltiples hospitalizaciones previas por exacerbaciones de EPOC. Refiere pobre adherencia a su medicación inhalada y niega fiebre o expectoración purulenta reciente. \n Pregunta: ¿Cuál de las siguientes acciones NO estaría indicada inicialmente en el manejo de la exacerbación aguda de Doña Sofía?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Administración de broncodilatadores de acción corta nebulizados.",
            "Inicio de corticoesteroides sistémicos intravenosos.",
            "Administración agresiva de líquidos intravenosos.",
            "Considerar ventilación mecánica no invasiva (VMNI) si no hay contraindicaciones."
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correcto. La sobrecarga de líquidos puede empeorar la situación.",
          messageForIncorrectAnswer:
            "Incorrecto. La hidratación debe manejarse con precaución en pacientes con EPOC grave.",
          explanation:
            "La administración excesiva de líquidos puede causar sobrecarga y complicar el cuadro respiratorio.",
          point: "1"
        },
        {
          question:
            "Doña Sofía, de 68 años, con diagnóstico de EPOC GOLD IV (muy grave) y enfisema predominante, usuaria crónica de oxígeno domiciliario (2 litros/minuto por cánula nasal), es traída al servicio de urgencias por su hija debido a un empeoramiento súbito de su disnea, confusión mental progresiva y somnolencia en las últimas 12 horas. Antecedentes: Hipertensión arterial, cardiopatía isquémica, y múltiples hospitalizaciones previas por exacerbaciones de EPOC. Refiere pobre adherencia a su medicación inhalada y niega fiebre o expectoración purulenta reciente. \n Pregunta: Durante la monitorización de Doña Sofía, ¿qué signo clínico podría indicar un empeoramiento de la hipercapnia inducida por la administración inadecuada de oxígeno?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Un aumento en la frecuencia cardíaca y la presión arterial.",
            "Una disminución en la frecuencia respiratoria y un aumento de la somnolencia.",
            "Una mejora en la saturación de oxígeno acompañada de una disminución de la disnea.",
            "Un aumento en la producción de esputo y la intensidad de las sibilancias."
          ],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correcto. La somnolencia con respiración deprimida es signo de hipercapnia.",
          messageForIncorrectAnswer:
            "Incorrecto. Observa los efectos del CO₂ elevado en el estado mental y respiratorio.",
          explanation:
            "El exceso de oxígeno puede reducir el estímulo respiratorio en pacientes con EPOC y causar retención de CO₂, lo que lleva a hipoventilación y somnolencia.",
          point: "1"
        },
        {
          question:
            "Doña Sofía, de 68 años, con diagnóstico de EPOC GOLD IV (muy grave) y enfisema predominante, usuaria crónica de oxígeno domiciliario (2 litros/minuto por cánula nasal), es traída al servicio de urgencias por su hija debido a un empeoramiento súbito de su disnea, confusión mental progresiva y somnolencia en las últimas 12 horas. Antecedentes: Hipertensión arterial, cardiopatía isquémica, y múltiples hospitalizaciones previas por exacerbaciones de EPOC. Refiere pobre adherencia a su medicación inhalada y niega fiebre o expectoración purulenta reciente.\n Pregunta: ¿Cuál de los siguientes hallazgos indicaría una posible complicación infecciosa que podría haber precipitado la exacerbación de Doña Sofía, a pesar de negar expectoración purulenta?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Una presión arterial persistentemente elevada.",
            "Un aumento significativo en el recuento de leucocitos en el hemograma.",
            "Una saturación de oxígeno que mejora rápidamente con la administración de oxígeno.",
            "La presencia de sibilancias espiratorias en la auscultación pulmonar."
          ],
          correctAnswer: "2",
          messageForCorrectAnswer:
            "Correcto. La leucocitosis puede ser un marcador de infección incluso en ausencia de síntomas clásicos.",
          messageForIncorrectAnswer:
            "Incorrecto. Algunos marcadores de laboratorio pueden revelar infecciones ocultas.",
          explanation:
            "Un hemograma con leucocitos elevados puede indicar infección subyacente aunque no haya esputo purulento visible.",
          point: "1"
        },
        {
          question:
            "Doña Sofía, de 68 años, con diagnóstico de EPOC GOLD IV (muy grave) y enfisema predominante, usuaria crónica de oxígeno domiciliario (2 litros/minuto por cánula nasal), es traída al servicio de urgencias por su hija debido a un empeoramiento súbito de su disnea, confusión mental progresiva y somnolencia en las últimas 12 horas. Antecedentes: Hipertensión arterial, cardiopatía isquémica, y múltiples hospitalizaciones previas por exacerbaciones de EPOC. Refiere pobre adherencia a su medicación inhalada y niega fiebre o expectoración purulenta reciente. \n Pregunta: ¿Cuál de las siguientes acciones probablemente NO sería una intervención inicial en el servicio de urgencias para Doña Sofia?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Administración de broncodilatadores inhalados.",
            "Oxigenoterapia suplementaria.",
            "Inicio de antibioticoterapia empírica.",
            "Realización de una espirometría completa."
          ],
          correctAnswer: "4",
          messageForCorrectAnswer: "Correcto. La espirometría no es una prioridad en una exacerbación aguda.",
          messageForIncorrectAnswer: "Incorrecto. La espirometría se realiza en situaciones estables, no en crisis.",
          explanation:
            "La espirometría está contraindicada en exacerbaciones agudas por el riesgo de empeorar el cuadro clínico.",
          point: "1"
        }
      ]
    }
  },
  {
    type: StepsType.VIDEO,
    title: "Video explicativo 11",
    url: "https://youtu.be/3EdRB8q8VqE",
    section: "Sección 11: Insuficiencia respiratoria"
  },
  {
    type: StepsType.LINK,
    title: "Contenido 11.1",
    url: "https://claude.ai/public/artifacts/73751067-17dc-418c-8905-d24a5fb725c5",
    section: "Sección 11: Insuficiencia respiratoria"
  },
  {
    type: StepsType.LINK,
    title: "Contenido 11.2",
    url: "https://claude.ai/public/artifacts/049843f3-7f39-4964-a4bf-6b893caa8e5f",
    section: "Sección 11: Insuficiencia respiratoria"
  },
  {
    type: StepsType.LINK,
    title: "Video explicativo 11.3",
    url: "https://www.tiktok.com/@ross.med_/video/7424720584573062406?_t=ZS-8w7REwrSx7w&_r=1",
    section: "Sección 11: Insuficiencia respiratoria"
  },
  {
    type: StepsType.VIDEO,
    title: "Video explicativo 11.4",
    url: "https://youtu.be/yKIn3CqN5P4",
    section: "Sección 11: Insuficiencia respiratoria"
  },
  {
    type: StepsType.QUIZ,
    title: "Evaluación Módulo No.4 - Insuficiencia Respiratoria",
    section: "Sección 11: Insuficiencia respiratoria",
    config: {
      quizTitle: "Evaluación Módulo No.4 - Insuficiencia Respiratoria Aguda en EPOC con Neumonía",
      quizSynopsis:
        "Paciente masculino de 68 años con antecedentes de EPOC, ingresa al servicio de urgencias con disnea severa, tos productiva y fiebre. A la evaluación inicial, presenta FR de 32 rpm, SatO2 de 87% con oxígeno suplementario, uso de musculatura accesoria y cianosis peribucal. La gasometría arterial muestra PaO2 de 55 mmHg y PaCO2 de 60 mmHg. La radiografía de tórax revela infiltrados bilaterales compatibles con neumonía",
      progressBarColor: "#6fb1fc",
      nrOfQuestions: "4",
      questions: [
        {
          question:
            "Paciente masculino de 68 años con antecedentes de EPOC, ingresa al servicio de urgencias con disnea severa, tos productiva y fiebre. A la evaluación inicial, presenta FR de 32 rpm, SatO2 de 87% con oxígeno suplementario, uso de musculatura accesoria y cianosis peribucal. La gasometría arterial muestra PaO2 de 55 mmHg y PaCO2 de 60 mmHg. La radiografía de tórax revela infiltrados bilaterales compatibles con neumonía. Pregunta: ¿Cuál es el tipo de insuficiencia respiratoria que presenta el paciente?",
          questionType: "text",
          answerSelectionType: "single",
          answers: ["Tipo I (Hipoxémica)", "Tipo II (Hipercápnica)", "Mixta", "No se puede determinar"],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correcto. El paciente presenta hipoxemia y retención de CO₂.",
          messageForIncorrectAnswer: "Incorrecto. La gasometría indica un patrón mixto de insuficiencia.",
          explanation:
            "El paciente tiene PaO₂ baja (<60 mmHg) y PaCO₂ elevada (>45 mmHg), lo que corresponde a insuficiencia respiratoria mixta.",
          point: "1"
        },
        {
          question:
            "¿Paciente masculino de 68 años con antecedentes de EPOC, ingresa al servicio de urgencias con disnea severa, tos productiva y fiebre. A la evaluación inicial, presenta FR de 32 rpm, SatO2 de 87% con oxígeno suplementario, uso de musculatura accesoria y cianosis peribucal. La gasometría arterial muestra PaO2 de 55 mmHg y PaCO2 de 60 mmHg. La radiografía de tórax revela infiltrados bilaterales compatibles con neumonía. Pregunta: Cuál es el objetivo de saturación de oxígeno en este paciente?",
          questionType: "text",
          answerSelectionType: "single",
          answers: ["94-98%", "88-92%", ">98%", "No requiere oxígeno suplementario"],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correcto. En EPOC, el objetivo es mantener una saturación entre 88-92%.",
          messageForIncorrectAnswer: "Incorrecto. Una saturación demasiado alta puede provocar hipercapnia en EPOC.",
          explanation:
            "En pacientes con EPOC, se debe evitar la sobreoxigenación para prevenir la depresión del estímulo respiratorio.",
          point: "1"
        },
        {
          question:
            "Paciente masculino de 68 años con antecedentes de EPOC, ingresa al servicio de urgencias con disnea severa, tos productiva y fiebre. A la evaluación inicial, presenta FR de 32 rpm, SatO2 de 87% con oxígeno suplementario, uso de musculatura accesoria y cianosis peribucal. La gasometría arterial muestra PaO2 de 55 mmHg y PaCO2 de 60 mmHg. La radiografía de tórax revela infiltrados bilaterales compatibles con neumonía. Pregunta: ¿Qué estudios diagnósticos son fundamentales en este caso?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Gasometría arterial y radiografía de tórax",
            "Hemograma completo y electrolitos",
            "ECG y estudios microbiológicos",
            "Todas las anteriores"
          ],
          correctAnswer: "4",
          messageForCorrectAnswer: "Correcto. Se requiere una evaluación integral para abordar el cuadro agudo.",
          messageForIncorrectAnswer:
            "Incorrecto. Se deben combinar pruebas respiratorias, infecciosas y cardiovasculares.",
          explanation:
            "Dado el cuadro clínico complejo, se justifica una evaluación completa para establecer el diagnóstico y tratamiento adecuado.",
          point: "1"
        },
        {
          question:
            "Paciente masculino de 68 años con antecedentes de EPOC, ingresa al servicio de urgencias con disnea severa, tos productiva y fiebre. A la evaluación inicial, presenta FR de 32 rpm, SatO2 de 87% con oxígeno suplementario, uso de musculatura accesoria y cianosis peribucal. La gasometría arterial muestra PaO2 de 55 mmHg y PaCO2 de 60 mmHg. La radiografía de tórax revela infiltrados bilaterales compatibles con neumonía. Pregunta: ¿Cuáles son los criterios de ingreso en UCI/UCRI en este paciente?",
          questionType: "text",
          answerSelectionType: "single",
          answers: [
            "Necesidad de ventilación mecánica invasiva",
            "Inestabilidad hemodinámica",
            "Acidosis respiratoria severa (pH <7.25)",
            "Todas las anteriores"
          ],
          correctAnswer: "4",
          messageForCorrectAnswer: "Correcto. Estos criterios indican alta gravedad y riesgo vital.",
          messageForIncorrectAnswer:
            "Incorrecto. Todos los factores mencionados son indicativos de ingreso en unidad crítica.",
          explanation:
            "Cuando un paciente presenta hipercapnia severa, acidosis o falla hemodinámica, se requiere atención intensiva.",
          point: "1"
        }
      ]
    }
  }
];
