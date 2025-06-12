import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Calendar, Clock, Trophy } from "lucide-react";
import CourseStepLayout from "@/components/course/CourseStepLayout";
import { CourseSharedProps } from "./Course";
import { authWithUser } from "@/lib/user";

type CourseCertificateProps = CourseSharedProps;
export default async function CourseCertificate({ onClickPrev }: CourseCertificateProps) {
  const user = await authWithUser();
  const studentName = user.name;
  const courseName = "Enfermería";
  const completionDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const duration = "120 horas";
  const instructor = "Diana García";
  const grade = "Excelente";

  return (
    <CourseStepLayout onClickNext={undefined} onClickPrev={onClickPrev}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse" />

        <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative overflow-hidden">
          {/* Decorative Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-1 rounded-lg">
            <div className="bg-white rounded-lg h-full w-full" />
          </div>

          <CardContent className="relative p-12 text-center">
            {/* Header with Trophy */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Congratulations Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                ¡Felicitaciones!
              </h1>
              <p className="text-xl text-gray-600 font-medium">Has completado exitosamente tu curso</p>
            </div>

            {/* Certificate Content */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border border-blue-100">
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-2">Se certifica que</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{studentName}</h2>
                <p className="text-lg text-gray-700 mb-2">ha completado satisfactoriamente el curso</p>
                <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  {courseName}
                </h3>
              </div>

              {/* Course Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{completionDate}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{duration}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                    <Award className="w-4 h-4 mr-1" />
                    {grade}
                  </Badge>
                </div>
              </div>

              {/*/!* Instructor Signature *!/*/}
              {/*<div className="border-t border-gray-200 pt-6">*/}
              {/*  <p className="text-gray-600 mb-2">Instructor</p>*/}
              {/*  <p className="font-semibold text-gray-800 text-lg">{instructor}</p>*/}
              {/*</div>*/}
            </div>

            {/* Action Buttons */}
            {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"*/}
            {/*  >*/}
            {/*    <Download className="w-5 h-5 mr-2" />*/}
            {/*    Descargar Certificado*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    variant="outline"*/}
            {/*    size="lg"*/}
            {/*    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"*/}
            {/*  >*/}
            {/*    <Share2 className="w-5 h-5 mr-2" />*/}
            {/*    Compartir Logro*/}
            {/*  </Button>*/}
            {/*</div>*/}

            {/* Achievement Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <p className="text-gray-600 font-medium">Completado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <p className="text-gray-600 font-medium">Certificado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Logro Desbloqueado</p>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
              <p className="text-lg text-gray-700 italic">
                "El aprendizaje es un tesoro que seguirá contigo donde quiera que vayas. ¡Continúa creciendo y
                alcanzando nuevas metas!"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CourseStepLayout>
  );
}
