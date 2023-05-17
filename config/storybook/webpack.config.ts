import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.module?.rules?.push(buildCssLoader(true));

    if (config?.module?.rules) {
        const newConfig = { ...config };

        if (newConfig.module) {
            newConfig.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
                if (rule !== '...' && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            });
        }
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};