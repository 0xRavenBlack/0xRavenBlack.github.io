# Groups consecutive images in post content into 2-per-row wrappers and
# lazy-loads them for performance.
# Usage: {{ content | image_rows }}
module Jekyll
  module ImageRowsFilter
    IMG_P = %r{<p[^>]*>\s*<img[^>]*>\s*</p>}i

    def image_rows(html)
      return html if html.nil?

      html = lazy_images(html)

      chunks = html.scan(IMG_P)
      return html if chunks.length < 2

      remainder = html.split(IMG_P)
      out = +remainder.shift.to_s

      chunks.each_slice(2) do |pair|
        row = if pair.length == 2
                %(<div class="img-row">#{pair[0]}#{pair[1]}</div>)
              else
                %(<div class="img-row img-row--single">#{pair[0]}</div>)
              end
        out << row
        out << remainder.shift.to_s
      end

      out
    end

    private

    def lazy_images(html)
      html.gsub(%r{<img(?![^>]*loading=)([^>]*?)(/?>)}i) do
        %(<img loading="lazy" decoding="async"#{$1}#{$2})
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImageRowsFilter)