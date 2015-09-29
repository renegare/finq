class String
    def _case
        self.squish.downcase.tr ' ', '_'
    end

    def _case!
        replace _case
    end

    def page_class
        className = self.gsub(/\s*page/, '')
            ._case
            .gsub(/_page/, '')
            .camelize + 'Page'
        className.constantize
    end

    def page_class!
        replace page_class
    end
end
