import { Link } from "wouter";
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="text-primary text-xl" />
              <span className="text-xl font-bold">회사명</span>
            </div>
            <p className="text-slate-300 mb-4">
              혁신적인 솔루션으로 미래를 만들어가는 
              전문 서비스 기업입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-primary transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/directions" className="text-slate-300 hover:text-primary transition-colors">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">연락처</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                02-1234-5678
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@company.com
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                서울특별시 강남구
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 회사명. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
