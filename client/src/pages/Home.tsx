import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  혁신적인 솔루션으로 송정섭<br />
                  <span className="text-sky-200">미래를 만들어갑니다</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  전문성과 신뢰를 바탕으로 고객에게 최고의 가치를 제공하는
                  선도적인 기업입니다.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-white text-primary hover:bg-slate-50 shadow-lg">
                    회사소개 보기
                  </Button>
                </Link>
                <Link href="/directions">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    오시는 길
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern office buildings representing innovation and growth"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">왜 저희를 선택해야 할까요?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              수년간의 경험과 전문성을 바탕으로 고객에게 차별화된 가치를 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">혁신적 솔루션</h3>
              <p className="text-slate-600">
                최신 기술과 창의적 사고를 결합하여
                고객의 비즈니스 성장을 가속화합니다.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">전문 팀</h3>
              <p className="text-slate-600">
                각 분야의 전문가들이 모여
                최고 품질의 서비스를 제공합니다.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">검증된 성과</h3>
              <p className="text-slate-600">
                다양한 프로젝트를 통해 입증된
                실력과 신뢰할 수 있는 결과를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">함께 성장하는 파트너가 되어보세요</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              저희와 함께 새로운 기회를 만들어가고
              비즈니스의 성공을 함께 이루어나가겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="bg-primary text-white hover:bg-blue-700">
                  더 알아보기
                </Button>
              </Link>
              <a href="tel:02-1234-5678">
                <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900">
                  문의하기
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
