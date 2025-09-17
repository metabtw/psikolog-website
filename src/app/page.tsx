import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Heart, Brain, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Dr. Ali Demir</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Hizmetler</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">İletişim</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ruh Sağlığınız İçin
                <span className="text-blue-600 block">Profesyonel Destek</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                15 yıllık deneyimimle, bireysel ve grup terapileri ile yaşamınızda pozitif değişiklikler yaratmanıza yardımcı oluyorum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Randevu Al
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Psikolog danışmanlık"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Ali Demir"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Hakkımda</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                İstanbul Üniversitesi Psikoloji Bölümü mezunu olarak, 15 yıldır ruh sağlığı alanında hizmet vermekteyim. 
                Bilişsel Davranışçı Terapi, EMDR ve Mindfulness temelli yaklaşımlarla danışanlarıma destek oluyorum.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Anksiyete, depresyon, travma sonrası stres bozukluğu ve ilişki sorunları konularında uzmanlaşmış durumdayım. 
                Her bireyin benzersiz olduğuna inanarak, kişiye özel tedavi planları oluşturuyorum.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Lisanslı Psikolog</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">15+ Yıl Deneyim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hizmetlerim</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı yaş grupları ve ihtiyaçlar için özel olarak tasarlanmış terapi hizmetleri sunuyorum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Bireysel Terapi</h4>
              <p className="text-gray-600 leading-relaxed">
                Kişisel sorunlarınızla başa çıkmanız için birebir destek. Anksiyete, depresyon ve stres yönetimi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Çift Terapisi</h4>
              <p className="text-gray-600 leading-relaxed">
                İlişki sorunları, iletişim problemleri ve çift uyumu için profesyonel rehberlik.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Travma Terapisi</h4>
              <p className="text-gray-600 leading-relaxed">
                EMDR ve diğer travma odaklı yaklaşımlarla geçmiş yaraları iyileştirme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Randevu almak veya sorularınız için benimle iletişime geçebilirsiniz. 
                Size en uygun zamanda geri dönüş yapacağım.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">+90 (212) 555 0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">dr.alidemir@email.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">Nişantaşı, İstanbul</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">Pazartesi - Cuma: 09:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Adınızı girin"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mesajınızı yazın"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-2xl font-bold">Dr. Ali Demir</h4>
            </div>
            <p className="text-gray-400 mb-4">Ruh sağlığınız için profesyonel destek</p>
            <p className="text-sm text-gray-500">
              © 2024 Dr. Ali Demir. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
