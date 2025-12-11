import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  { src: "/videos/video-1.mp4", title: "Proses Membuat Gerabah", thumbnail: null },
  { src: "/videos/video-2.mp4", title: "Workshop Mewarnai", thumbnail: null },
  { src: "/videos/video-3.mp4", title: "Keseruan Peserta", thumbnail: null },
  { src: "/videos/video-4.mp4", title: "Highlight Kegiatan", thumbnail: null },
];

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="video" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-3xl text-accent mb-4">Video</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ragam Kreativitas dalam <span className="text-primary">Setiap Detik</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saksikan momen-momen seru di balik setiap karya yang tercipta di Lakeisha Souvenir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group bg-foreground/10"
              onClick={() => setActiveVideo(video.src)}
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-elevated animate-pulse">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <h4 className="font-display text-lg font-semibold text-primary-foreground">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <video
              src={activeVideo}
              className="w-full aspect-video"
              controls
              autoPlay
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;
