import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, TrainFront, Bus, Car } from "lucide-react";

export default function Directions() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "문의가 접수되었습니다",
      description: "빠른 시일 내에 연락드리겠습니다.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Directions Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">오시는 길</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                저희 회사에 방문하시는 방법을 안내해드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">위치 안내</h2>
              <div className="bg-slate-100 rounded-xl p-4 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="text-primary text-4xl mx-auto" />
                  <p className="text-slate-600">
                    지도 연동 영역<br />
                    실제 구현 시 지도 API 연동
                  </p>
                </div>
              </div>
            </div>

            {/* Address & Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">연락처 정보</h2>
                
                <div className="bg-slate-50 p-6 rounded-xl space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary text-lg mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">주소</h3>
                      <p className="text-slate-600">
                        서울특별시 강남구 테헤란로 123<br />
                        OO빌딩 10층
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-primary text-lg mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">전화번호</h3>
                      <p className="text-slate-600">02-1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="text-primary text-lg mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">이메일</h3>
                      <p className="text-slate-600">info@company.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-primary text-lg mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">운영시간</h3>
                      <p className="text-slate-600">
                        평일: 09:00 - 18:00<br />
                        토요일: 09:00 - 13:00<br />
                        일요일 및 공휴일: 휴무
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">교통편 안내</h2>
            <p className="text-lg text-slate-600">
              다양한 교통수단을 이용하여 편리하게 방문하실 수 있습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* TrainFront */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <TrainFront className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">지하철</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>2호선 강남역</strong></p>
                <p>11번 출구 도보 5분</p>
                <p><strong>9호선 신논현역</strong></p>
                <p>3번 출구 도보 7분</p>
              </div>
            </div>
            
            {/* Bus */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Bus className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">버스</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>간선버스</strong></p>
                <p>146, 401, 402, 421</p>
                <p><strong>지선버스</strong></p>
                <p>3412, 4319, 6411</p>
              </div>
            </div>
            
            {/* Car */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Car className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">자가용</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>주차 안내</strong></p>
                <p>건물 내 지하주차장 이용</p>
                <p>방문 시 프런트에서 주차권 수령</p>
                <p>2시간 무료 주차 가능</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">문의하기</h2>
            <p className="text-lg text-slate-600">
              방문 전 미리 연락 주시면 더욱 원활한 상담이 가능합니다.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="성함을 입력해주세요"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">연락처</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="연락처를 입력해주세요"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">문의 내용</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="문의하실 내용을 입력해주세요"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-primary text-white hover:bg-blue-700">
                문의하기
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
