import me from "../assets/me.png";

function Profile() {
  return (
    <div id="Profile" className="conatiner">
      <div className="m-4">
        <div className="w-full text-center">
          <img
            src={me}
            alt="Furuta Katsumi"
            className="w-32 h-32 mx-auto rounded-full m-8"
          />
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/3 pr-0 md:pr-4 mx-auto">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">所属</h4>
              <ul className="list-disc list-inside text-md">
                <li>株式会社タイミー</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">経歴</h4>
              <ul className="list-disc list-inside text-md">
                <li>1998年 3月 神奈川県生まれ</li>
                <li>2015年 8月 株式会社Gupero設立</li>
                <li>2016年 4月 慶應義塾大学環境情報学部入学</li>
                <li>2020年 3月 慶應義塾大学環境情報学部卒業</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">分野</h4>
              <ul className="list-disc list-inside text-md">
                <li>Human computer interaction</li>
                <li>Growth Marketing</li>
                <li>Analyst / Data Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
