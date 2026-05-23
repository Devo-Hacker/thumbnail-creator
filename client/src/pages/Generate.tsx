import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { colorSchemes, dummyThumbnails, type AspectRatio, type IThumbnail, type ThumbnailStyle, } from "../assets/assets";
import SoftBackDrop from "../components/SoftBackDrop";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";

const Generate = () => {

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
    const [loading, setLoading] = useState(false);

    const [aspectRatio ,setAspectRatio] = useState<AspectRatio>('16:9');
    const [colorSchemeId, setColorSchemeId] = useState<string>(colorSchemes[0].id);
    const [style, setStyle] = useState<ThumbnailStyle>('Bold & Graphic');

   const [styleDropdownOpen , setStyleDropdownOpen] = useState(false);

    const handleGenerate = async () =>{

    }

    const fetchThumbnail = () => {
      if(id){
        const thumbnail : any = dummyThumbnails.find((thumbnail)=> thumbnail._id === id);
        setThumbnail(thumbnail)
        setAdditionalDetails(thumbnail.user_prompt)
        setTitle(thumbnail.title)
        setColorSchemeId(thumbnail.color_scheme)
        setAspectRatio(thumbnail.aspect_ratio)
        setStyle(thumbnail.style)
        setLoading(false)
      }
    }

    useEffect(()=>{
      if(id){
        fetchThumbnail()
      }
    },[id])


  return (
    <>
      <SoftBackDrop/>
      <div className="pt-24 min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 1g:px-8 py-8 pb-28 1g:pb-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8">

            {/* left pannel */}
            <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
              <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100 mb-1">Create your Thumbnail</h2>
                  <p className="text-sm text-zinc-400">Show you creativity...</p>
                </div>

                <div className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Title:</label>
                  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} maxLength={100} placeholder="Eg. How to brainrot?" className="
                  w-full px-4 py-3 rounded-lg border border-white /12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none
                  focus:ring-2 focus:ring-blue-500"/>
                  <div className="flex justify-end">
                    <span className="text-xs text-zinc-400">{title.length}/100</span>
                  </div>
                  </div>
                    {/* aspect ratio selector */}
                    <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio}/>
                    <StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen}/>
                    <ColorSchemeSelector value={colorSchemeId} onChange={setColorSchemeId}/>


                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Additional Prompts
                        <span className="text-zinc-400 text-xs">(Optional)</span>
                      </label>
                      <textarea value={additionalDetails} onChange={(e)=>setAdditionalDetails(e.target.value)} rows={3} placeholder="Add any specific elements according to your mood..." className="w-full
                      px-4 py-3 rounded-lg border border-white/10 bg-white/6 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 *
                      focus:ring-indigo-700 resize-none"/>
                    </div>
                </div>

                {!id && (
                  <button onClick={handleGenerate} className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-cyan-600 to-indigo-600 hover:from-cyan-700 disabled: cursor-not-allowed transition-colors">
                    {loading ? 'Generating....' : 'Generate Thumbnail'}
                  </button>
                )}
              </div>
            </div>

            {/* right pannel */}
                <div>
                  <div className="p-6 rounded-2xl bg-white/8 border border-white/10 shadow-xl">
                    <h2 className="text-lg font-bold text-zinc-100 mb-4">Preview</h2>
                    <PreviewPanel thumbnail={thumbnail} isLoading={loading} aspectRatio={aspectRatio}/>
                  </div>
                </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default Generate