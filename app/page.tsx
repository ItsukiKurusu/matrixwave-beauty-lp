"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Sparkles, Star, Clock, Shield, Award } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function MatrixWavePage() {
  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const [modalAlt, setModalAlt] = useState<string>("")

  const openModal = (src: string, alt = "") => {
    setModalSrc(src)
    setModalAlt(alt)
  }

  const closeModal = () => {
    setModalSrc(null)
    setModalAlt("")
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">MATRIXWAVE</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              サービス
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              特徴
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              お客様の声
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              お問い合わせ
            </a>
          </nav>
          <Button asChild className="bg-amber-500 text-black hover:bg-amber-400">
            <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
              問い合わせ
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-contain bg-black">
          <source src="/MATRIX.mp4" type="video/mp4" />
        </video>
      </section>

      {/* What is MATRIXWAVE Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">MATRIXWAVEとは何か？</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-pretty">
              最大の特徴は、直流電気ならではのイオン効果にあります。
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/10] bg-gradient-to-br from-yellow-100/10 to-amber-100/10 rounded-2xl overflow-hidden p-4">
              <img
                src="/matrix-ion-effect.jpg"
                alt="MATRIXWAVEのイオン効果 - マイナスイオンによる全身の膜改善と内臓機能向上"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">MATRIXWAVEトリートメント</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              直流電気の力で肌細胞を活性化し、自然な美しさを引き出します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-400 to-pink-400 border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">フェイシャルリフト</CardTitle>
                <CardDescription className="text-white/90">
                  直流電気でフェイスラインを引き締め、自然なリフトアップ効果
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• たるみ改善</li>
                  <li>• 小顔効果</li>
                  <li>• 血行促進</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-400 to-rose-400 border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">スキンリジュベネーション</CardTitle>
                <CardDescription className="text-white/90">
                  肌細胞の再生を促進し、若々しい肌へと導きます
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• シワ・シミ改善</li>
                  <li>• 肌質向上</li>
                  <li>• コラーゲン生成促進</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-300 to-pink-300 border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">ボディコンタリング</CardTitle>
                <CardDescription className="text-white/90">
                  ボディラインを整え、理想的なシルエットを実現
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• セルライト改善</li>
                  <li>• 引き締め効果</li>
                  <li>• 代謝向上</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">MATRIX WAVE テクノロジー</h2>
              <p className="text-lg text-gray-300 mb-6 text-pretty">
                最先端の直流電気技術により、肌の深層部まで働きかけ、細胞レベルでの美容効果を実現します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">直流電気の力</h3>
                    <p className="text-gray-300 text-sm">
                      安全で効果的な直流電気が肌細胞を活性化し、自然な美しさを引き出します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">精密制御システム</h3>
                    <p className="text-gray-300 text-sm">
                      個人の肌質に合わせて電流の強度と周波数を精密にコントロールします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">多機能アプローチ</h3>
                    <p className="text-gray-300 text-sm">
                      フェイシャル、ボディ、スキンケアを一台で対応する革新的なシステム。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-100/10 to-amber-100/10 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="/matrix-body.jpg"
                  alt="MATRIX WAVE機器本体"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">施術風景</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
                リラックスできる空間で、専門技術者による丁寧な施術をお受けいただけます
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100/5 to-amber-100/5 rounded-2xl overflow-hidden">
                  <img
                    src="/operation1.jpg"
                    alt="MATRIX WAVE施術風景1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold mb-1">プロフェッショナル施術</h3>
                    <p className="text-sm text-gray-200">最新機器による精密な美容ケア</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100/5 to-orange-100/5 rounded-2xl overflow-hidden">
                  <img
                    src="/operation2.jpg"
                    alt="MATRIX WAVE施術風景2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold mb-1">リラックス空間</h3>
                    <p className="text-sm text-gray-200">心地よい環境での美容体験</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
                なぜMATRIXWAVEが選ばれるのか
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">安全性の高い技術</h3>
                    <p className="text-gray-300 text-sm">
                      医療機関でも使用される安全な直流電気技術を採用。副作用の心配がありません。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">即効性のある結果</h3>
                    <p className="text-gray-300 text-sm">
                      1回の施術でも効果を実感。継続することでより持続的な美容効果が期待できます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">専門技術者による施術</h3>
                    <p className="text-gray-300 text-sm">
                      豊富な経験を持つ専門技術者が、お客様一人ひとりに最適な施術を提供します。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[5/3] bg-gradient-to-br from-yellow-100/10 to-amber-100/10 rounded-2xl overflow-hidden">
                <img
                  src="/diet-image.jpg"
                  alt="MATRIXWAVE効果実証 - ダイエット・ボディメイク変化"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare and Profit Sections */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">他の機器と何が違うのか？</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">MATRIXWAVEと他の機器との違いを一目でご確認ください。</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-yellow-100/5 to-amber-100/5 rounded-2xl overflow-hidden p-6">
              <Image
                src="/Compare.png"
                alt="他の機器と何が違うのか？ 比較表"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">費用対効果の事例</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">導入による実際の費用対効果（成功事例）をご紹介します。</p>
          </div>

            {/* Profit cases stacked vertically, each full viewport height */}
            <div className="space-y-8">
              <section className="min-h-screen relative rounded-2xl overflow-hidden bg-black flex flex-col">
                <div className="h-[85vh] relative">
                  <Image
                    src="/Profit1.png"
                    alt="成功事例①（1人治療院）"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover cursor-pointer"
                    onClick={() => openModal('/Profit1.png', '成功事例①（1人治療院）')}
                  />
                </div>
                <div className="h-[15vh] flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold">成功事例①（1人治療院）</h3>
                </div>
              </section>

              <section className="min-h-screen relative rounded-2xl overflow-hidden bg-black flex flex-col">
                <div className="h-[85vh] relative">
                  <Image
                    src="/Profit2.png"
                    alt="成功事例②（1人治療院）"
                    fill
                    sizes="100vw"
                    className="object-cover cursor-pointer"
                    onClick={() => openModal('/Profit2.png', '成功事例②（1人治療院）')}
                  />
                </div>
                <div className="h-[15vh] flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold">成功事例②（1人治療院）</h3>
                </div>
              </section>

              <section className="min-h-screen relative rounded-2xl overflow-hidden bg-black flex flex-col">
                <div className="h-[85vh] relative">
                  <Image
                    src="/Profit3.png"
                    alt="成功事例③（施術者4名）"
                    fill
                    sizes="100vw"
                    className="object-cover cursor-pointer"
                    onClick={() => openModal('/Profit3.png', '成功事例③（施術者4名）')}
                  />
                </div>
                <div className="h-[15vh] flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold">成功事例③（施術者4名）</h3>
                </div>
              </section>

              <section className="min-h-screen relative rounded-2xl overflow-hidden bg-black flex flex-col">
                <div className="h-[85vh] relative">
                  <Image
                    src="/Profit4.png"
                    alt="成功事例④（施術者4名）"
                    fill
                    sizes="100vw"
                    className="object-cover cursor-pointer"
                    onClick={() => openModal('/Profit4.png', '成功事例④（施術者4名）')}
                  />
                </div>
                <div className="h-[15vh] flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold">成功事例④（施術者4名）</h3>
                </div>
              </section>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">お客様の声</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              実際にMATRIXWAVEを導入されたお客様からの喜びの声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  「1回の施術単価が30,000円を超えました。キャンペーンで新規顧客が増えています。」
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-600 font-semibold text-sm">A.S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">30代女性</p>
                    <p className="text-gray-400 text-xs">エステサロン経営（テナント）</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  「肌のハリが蘇り、化粧ノリも良くなったという声が非常に多いです。患者様のリピート率が約1.5倍になりました。」
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-500 font-semibold text-sm">M.T</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">40代女性</p>
                    <p className="text-gray-400 text-xs">エステサロン経営（自宅マンション）</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  「導入後のサポートが丁寧で、メニュー化以外にも、集客や採用・教育などなんでも相談に乗ってくれます。」
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-600 font-semibold text-sm">Y.K</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">50代男性</p>
                    <p className="text-gray-400 text-xs">複数店舗エステサロンオーナー</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
            今すぐMATRIXWAVEを体験してみませんか？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            初回限定で無料個別相談を実施中。 あなたの経営のお悩みを専門スタッフがお聞きします。
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-50">
              <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 h-5 w-5" />
                無料体験・個別相談予約
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">よくある質問</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              MATRIXWAVEについてよくお寄せいただく質問にお答えします
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                <span className="text-amber-500 mr-3 text-2xl font-bold">Q.</span>
                やけどや痛みはありますか？
              </h3>
              <p className="text-gray-300 ml-8 text-lg">
                <span className="text-amber-500 mr-3 text-xl font-bold">A.</span>
                発売から10年以上、事故・やけどゼロ。
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                <span className="text-amber-500 mr-3 text-2xl font-bold">Q.</span>
                効果はどのくらいで出ますか？
              </h3>
              <p className="text-gray-300 ml-8 text-lg">
                <span className="text-amber-500 mr-3 text-xl font-bold">A.</span>
                初回から体感あり。平均2〜3回で見た目変化。
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                <span className="text-amber-500 mr-3 text-2xl font-bold">Q.</span>
                導入サポートは？
              </h3>
              <p className="text-gray-300 ml-8 text-lg">
                <span className="text-amber-500 mr-3 text-xl font-bold">A.</span>
                専用研修＋販促POP＋動画マニュアルを完備。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
                <span className="text-xl font-bold text-white">MATRIXWAVE</span>
              </div>
              <p className="text-gray-300 text-sm">最先端の直流電気技術で、 あなたの美しさを引き出します。</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">サービス</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>フェイシャルリフト</li>
                <li>スキンリジュベネーション</li>
                <li>ボディコンタリング</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">運営会社情報</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>株式会社OMGコーポレーション</li>
                <li>営業時間: 9:00-18:00</li>
                <li>定休日: 日曜日・祝日</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">お問い合わせ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>TEL: 03-6264-5188</li>
                <li>Email: onenest1201@gmail.com</li>
                <li>〒105-0004 東京都港区新橋4丁目27-1 セントラルビル7階</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 OMG Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
