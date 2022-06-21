import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LineIcon, LineShareButton, LinkedinIcon, LinkedinShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "next-share";


const SocialShare = () => {
    return (
        <div className="fixed top-0 bottom-0 -left-1 w-36 h-full flex items-center justify-start">
      <div className="share_btn__container">
        <div className="share_icon__background bg-[#3B5998] rounded-tr-xl">
          <FacebookShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <FacebookIcon className="share__icon" />
          </FacebookShareButton>
          Share
        </div>
        <div className="share_icon__background bg-[#25D366]">
          <WhatsappShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <WhatsappIcon className="share__icon" />
          </WhatsappShareButton>
          Sent
        </div>
        <div className="share_icon__background bg-[#00ACED]">
          <TwitterShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <TwitterIcon className="share__icon" />
          </TwitterShareButton>
          Tweet
        </div>
        <div className="share_icon__background bg-[#CB2128]">
          <PinterestShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <PinterestIcon className="share__icon" />
          </PinterestShareButton>
          Share
        </div>
        <div className="share_icon__background bg-[#007FB1]">
          <LinkedinShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <LinkedinIcon className="share__icon" />
          </LinkedinShareButton>
          Post
        </div>
        <div className="share_icon__background bg-[#00B800]">
          <LineShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <LineIcon className="share__icon" />
          </LineShareButton>
          Sent
        </div>
        <div className="share_icon__background bg-[#1F1F1F] rounded-br-xl">
          <InstapaperShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <InstapaperIcon className="share__icon" />
          </InstapaperShareButton>
          Post
        </div>
      </div>
    </div>
    )
}

export default SocialShare;