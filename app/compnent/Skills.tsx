function Awards() {
  return (
    <div id="Awards" className="m-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/3 pr-0 md:pr-4 mx-auto">
          <ul className="list-disc list-inside space-y-2">
            <li>データサイエンティスト検定 リテラシーレベル 2022</li>
            <li>基本情報技術者試験</li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/3 pr-0 md:pr-4 mx-auto">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=katsumi-axis&layout=compact"
          alt="Top Languages"
          className="w-full h-auto p-4"
        />
      </div>
    </div>
  )
}

export default Awards
