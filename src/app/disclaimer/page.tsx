export default function DisclaimerPage() {
	return (
		<main className="flex flex-col gap-6 container p-0 mx-auto">
			<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
				Disclaimer
			</h1>

			<div className="flex flex-col gap-4 max-w-2xl">
				<p>
					Semua informasi yang ditampilkan PemimpinKita merupakan kumpulan dari{' '}
					<strong>informasi yang tersedia untuk umum</strong>. Informasi yang
					kami sajikan{' '}
					<strong>TIDAK dapat dianggap sebagai kebenaran mutlak</strong> dan
					seharusnya tidak menjadi satu-satunya sumber konsultasi, referensi,
					atau sumber informasi serupa.
				</p>
				<p>
					<strong>
						Pengguna PemimpinKita harus bertanggung jawab atas keputusan dan
						tindakan mereka sendiri
					</strong>
					. Meskipun kami berusaha menyediakan informasi yang objektif dan
					netral, kami mendorong pengguna untuk memverifikasi informasi dari
					sumber-sumber utama lainnya guna memastikan pemahaman yang lebih
					lengkap dan akurat.
				</p>
				<p>
					<strong>
						PemimpinKita tidak memiliki afiliasi dengan partai politik, kandidat
						individu, atau pihak lain yang terlibat dalam pemilihan politik.
					</strong>
				</p>{' '}
			</div>
		</main>
	);
}
