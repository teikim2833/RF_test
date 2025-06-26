import { Building, Lightbulb, Handshake, Star, Heart } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">회사소개</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                혁신과 전문성을 바탕으로 고객에게 최고의 가치를 제공하는 
                신뢰할 수 있는 파트너입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">우리의 이야기</h2>
                <p className="text-lg text-slate-600">
                  2010년 설립 이래, 저희는 끊임없는 혁신과 도전을 통해 
                  업계 선두주자로 성장해왔습니다.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600">
                  고객의 성공이 곧 우리의 성공이라는 믿음 하에, 
                  최고의 전문가들이 모여 차별화된 솔루션을 제공하고 있습니다.
                </p>
                <p className="text-slate-600">
                  지속적인 연구개발과 품질 개선을 통해 
                  고객이 신뢰할 수 있는 파트너가 되겠습니다.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaborating in modern office environment" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">핵심 가치</h2>
            <p className="text-lg text-slate-600">
              우리가 추구하는 가치와 원칙들입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">혁신</h3>
              <p className="text-slate-600 text-sm">
                끊임없는 연구와 개발을 통해 새로운 가치를 창출합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">신뢰</h3>
              <p className="text-slate-600 text-sm">
                투명하고 정직한 관계를 바탕으로 신뢰를 쌓아갑니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">품질</h3>
              <p className="text-slate-600 text-sm">
                최고의 품질을 제공하기 위해 끊임없이 노력합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">소통</h3>
              <p className="text-slate-600 text-sm">
                고객과의 원활한 소통을 통해 최적의 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">회사 정보</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Building className="mr-2 text-primary" />
                회사 개요
              </h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>설립일:</strong> 2010년 3월</p>
                <p><strong>임직원:</strong> 150명</p>
                <p><strong>자본금:</strong> 50억원</p>
                <p><strong>매출액:</strong> 200억원 (2023년)</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Star className="mr-2 text-primary" />
                주요 성과
              </h3>
              <div className="space-y-2 text-slate-600">
                <p>• 업계 최우수 품질상 수상</p>
                <p>• ISO 9001 인증 획득</p>
                <p>• 고객만족도 95% 달성</p>
                <p>• 특허 등록 20건</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Star className="mr-2 text-primary" />
                미래 비전
              </h3>
              <div className="space-y-2 text-slate-600">
                <p>• 글로벌 시장 진출</p>
                <p>• 지속가능한 경영 실현</p>
                <p>• 혁신 기술 개발</p>
                <p>• 사회적 책임 이행</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
